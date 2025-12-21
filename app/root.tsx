import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import Footer from "./components/footer";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import globalStyles from "~/style/global/global.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "icon",
      href: "/favicon.ico",
      type: "image/png",
    },
    {
      rel: "stylesheet",
      href: globalStyles,
    },
  ];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Subscribe to Jeffamazon Daily Newsletter - Jeffamazon",
  description: "Subscribe to the free, 1-minute newsletter keeping 10K+ professional people in the loop about business and technology.",
  viewport: "width=device-width,initial-scale=1"
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
