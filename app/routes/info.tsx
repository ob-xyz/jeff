import { Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import Altcha from "../components/altcha";
import scroll from "~/style/scss/components/showscroll.css";

import bg from "~/../public/img/jeffbg.png";
import cs from "~/../public/img/cs.jpg";
import li from "~/../public/img/social/linkedin.png";
import x from "~/../public/img/social/x.png";
import ig from "~/../public/img/social/instagram.png";
import info from "~/../public/img/social/info.png";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: scroll },
];
export default function Index() {
  return (
    <div className="moreinfo-container">
        <div className="header">
            <h1>Jeffamazon</h1>
            <p>Business news in 1-minute</p>
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
             <Link to="/">Home</Link>
          </div>
        </div>
    </div>
        <div className="inner-container">
            <img className="headerimg" src={bg} alt="Jeffamazon Background" />
            <div className="profile-outside">
            <div className="profile">
                <a href="https://x.com/chrissignore" target="_blank" rel="noopener noreferrer">
                <img className="headerimg" src={cs} alt="It's me (Chris Signore)" />
                <div className="inner-profile">
                    <h1>Chris Signore</h1>
                    <div className="social">
                        <a className="x" href="https://x.com/chrissignore" target="_blank" rel="noopener noreferrer">
                            <img src={x} alt="X (Twitter)" />
                        </a>
                        <a className="li" href="https://linkedin.com/in/chrissignore" target="_blank" rel="noopener noreferrer">
                            <img src={li} alt="LinkedIn" />
                        </a>
                    </div>
                </div>
                </a>
            </div>
            <div className="subscribe">
                <h1>Get Jeffamazon</h1>
                <div className="logo-grid">
                    <form method="post" action="https://app.jeffamzn.com/subscription/form">
                    <div className="input-wrapper">
                        <input className="email" type="text" name="firstName" placeholder="Your Name *" />
                    </div>
                    <div className="input-wrapper">
                        <input className="email" type="email" name="email" required placeholder="Email Address *" />
                        <button className="submit" type="submit">Subscribe</button>
                    </div>
                    <Altcha />
                    <input id="6d48f" type="hidden" name="l" value="6d48fffe-7d37-4c14-b317-3e4cda33a647" />
                    <input type="hidden" name="nonce" />
                    </form>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}