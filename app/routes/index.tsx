import { Link } from "@remix-run/react";
import { Link } from "@remix-run/react";

import li from "~/../public/img/social/linkedin.png";
import x from "~/../public/img/social/x.png";
import ig from "~/../public/img/social/instagram.png";
import info from "~/../public/img/social/info.png";
import j from "~/../public/img/ja7.png";

export default function Index() {
  return (
    <div className="container">
      <div className="header">
        <h1>Jeffamazon</h1>
        <p>Business news in 1-minute</p>
        <p>Join 38k+ daily readers</p>
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
          <img className="headerimg" src={j} alt="Instagram" />
      </div>
    </div>
  );
}