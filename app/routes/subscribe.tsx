import { Link } from "@remix-run/react";
import Altcha from "../components/altcha";
import header from "~/../public/img/ja5.png";

export default function Index() {
  return (
    <div className="subscribe-container">
            <div className="content">
              <div className="inner-content">
                  <img src={header} alt="Jeffamazon newsletter image" />
              <div className="box">
                <h1>Stay ahead of the curve.</h1>
                <p>Subscribe for your daily dose of business news 🚀</p>
            <form method="post" action="https://app.jeffamzn.com/subscription/form">
              <div className="input-wrapper1">
                <input className="email" type="text" name="firstName" placeholder="First Name *" />
                <input className="email" type="text" name="lastName" placeholder="Last Name *" />
              </div>
              <div className="input-wrapper">
                <input className="email" type="email" name="email" required placeholder="Email Address *" />
                <button className="submit" type="submit">I'm in</button>
              </div>
              <Altcha />
              <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
              <input type="hidden" name="nonce" />
            </form>
                </div>
              </div>
            </div>
      <div className="inner-content2">
      <h2>Stay ahead with <span>Jeffamazon</span></h2>
        <Link className="text" to="/subscribe">Don't waste time scrolling to stay ahead. <span>Jeffamazon is a one minute newsletter that keeps 42,000+ people ahead of the curve.</span> </Link>
      </div>
    </div>
  );
}