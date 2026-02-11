import { Link } from "@remix-run/react";
import Altcha from "../components/altcha";

import logo from "~/../public/img/ja2.png";
import header from "~/../public/img/ja5.png";

export default function Index() {
  return (
    <div className="subscribe-container">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>SIGN UP FOR JEFFAMAZON</h4>
            <h1>Join 42K+</h1>
          </div>
            <form method="post" action="https://app.jeffamzn.com/subscription/form">
                <input className="email mb" type="text" name="firstName" placeholder="First Name *" />
                <input className="email mb" type="text" name="lastName" placeholder="Last Name *" />
              <div className="input-wrapper">
                <input className="email" type="email" name="email" required placeholder="Email Address *" />
                <button className="submit" type="submit">Let's do it</button>
              </div>
              <Altcha />
              <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
              <input type="hidden" name="nonce" />
            </form>
        </div>
        <div className="inner-content1">
            <img src={header} alt="Jeffamazon newsletter image" />
        </div>
      </div>
      <div className="inner-content2">
      <h2>Start winning with <span>Jeffamazon</span></h2>
        <Link className="text" to="/subscribe">Don't waste your time scrolling to stay ahead. Jeffamazon is the <span>1 minute antidote that keeps 42,000+ people in the loop</span> about what matters across the world.</Link>
      </div>
    </div>
  );
}