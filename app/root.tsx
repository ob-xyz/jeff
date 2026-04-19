import type { MetaFunction } from "@remix-run/node";
import type { LinksFunction } from "@remix-run/node";
import Footer from "./components/footer";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
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
  title: "Jeffamazon — 1-Minute Newsletter",
  description: "Subscribe to Jeffamazon. Free 1-Minute Newsletter. Get business and technology news every day.",
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
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
