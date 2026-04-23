import { useState, useEffect } from "react";
import { Link, Form, useNavigation, useActionData } from "@remix-run/react";
import { json, type ActionFunctionArgs } from "@remix-run/node";
import Altcha from "../components/altcha";

import li from "~/../public/img/social/linkedin.png";
import x from "~/../public/img/social/x.png";
import ig from "~/../public/img/social/instagram.png";
import info from "~/../public/img/social/info.png";
import j from "~/../public/img/ja7.png";

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  console.log("New Subscriber:", email);
  return json({ success: true });
}

export default function Index() {
  const [showModal, setShowModal] = useState(false);
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();

  useEffect(() => {
    const isSubscribed = localStorage.getItem("jeffamzn_subscribed");
    const hasSeenThisSession = sessionStorage.getItem("jeffamzn_seen_session");

    // Only show if they aren't subscribed AND haven't seen it in this tab session
    if (!isSubscribed && !hasSeenThisSession) {
      const timer = setTimeout(() => {
        setShowModal(true);
        // Mark as seen immediately so navigating back doesn't trigger it again
        sessionStorage.setItem("jeffamzn_seen_session", "true");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (actionData?.success) {
      localStorage.setItem("jeffamzn_subscribed", "true");
      setShowModal(false);
    }
  }, [actionData]);

  return (
    <div className="container">
      {/* POPUP MODAL */}
      {showModal && (
        <div 
          className="modal-overlay" 
          onClick={() => setShowModal(false)} 
        >
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()} 
          >
            <h1>Jeffamazon</h1>
            <p>Subscribe to Jeffamazon's free newsletter</p>
            <p>Get the trending thing in tech every morning, plus new interviews and exclusive subscriber-only news</p>
            
            <form method="post" action="https://app.jeffamzn.com/subscription/form">
              <div className="input-wrapper">
                <input className="email" type="email" name="email" required placeholder="Email Address *" />
                <button className="submit" type="submit">Subscribe</button>
              </div>
              <Altcha />
              <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
              <input type="hidden" name="nonce" />
            </form>

            <p 
              className="dismiss-text" 
              onClick={() => setShowModal(false)}
            >
              No thanks! I'm already subscribed
            </p>
          </div>
        </div>
      )}

      {/* MAIN APP CONTENT */}
      <div className="header">
        <h1>Jeffamazon</h1>
        <p>Tech news in 1-minute</p>
        <p>Join 38,000 daily readers</p>
        <div className="outer-header">
          <div className="inner-header">
            <div className="social">
              <a className="x" href="https://x.com/jeffamzn" target="_blank" rel="noopener noreferrer">
                <img src={x} alt="X (Twitter)" />
              </a>
              <a className="ig" href="https://instagram.com/jeffamzn" target="_blank" rel="noopener noreferrer">
                <img src={ig} alt="Instagram" />
              </a>
              <a className="li" href="https://linkedin.com/company/jeffamzn" target="_blank" rel="noopener noreferrer">
                <img src={li} alt="LinkedIn" />
              </a>
              <Link className="info" to="/info">
                <img src={info} alt="More Info" />
              </Link>
            </div>
          </div>
          <div className="inner-header2">
            <Link to="/subscribe">Subscribe</Link>
          </div>
        </div>
        <img className="headerimg" src={j} alt="Jeffamazon" />
      </div>
    </div>
  );
}