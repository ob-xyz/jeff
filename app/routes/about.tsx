import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja2.png";
import header4 from "~/../public/img/ja7.png";
import cs from "~/../public/img/cs.jpg";

export default function Index() {
  return (
    <div className="about-container">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>Hey, I'm Chris</h4>
            <h1>Aspiring writer.<br />Aspiring entrepreneur.<br />Aspiring morning person.</h1>
            <p>But I'm best known for my newsletter Jeffamazon 🚀</p>
          </div>
      <div className="btn">
            <Link className="pricebtn" to="/subscribe">Check it out</Link>
      </div>
        </div>
        <div className="inner-content1">
            <img src={cs} alt="Jeffamazon feed image" />
        </div>
      </div>
      <div className="inner-content2">
      <h2><span>Here's the low</span></h2>
          <Link className="text" to="/about">I'm best known for my newsletter Jeffamazon.</Link>
          <br /><br /><br />
          <Link className="text" to="/about">But I'm actually just a bootstrapped founder trying to build something real in the world.</Link>
          <br /><br /><br />
          <Link className="text" to="/subscribe">Wanna get in touch? the best way to reach me is <span>chris@jeffamazon.com</span></Link>
      </div>
      <div className="inner-content3sm">
      <div className="grid">
      <div className="boxmat">
         <div className="floatimg">
          <img src={header4} alt="Jeffamazon feed image" />
      </div>
      <div className="box">
        <h1>Jeffamazon</h1>
        <p>Every day Jeffamazon emails you a one minute news feed that helps you know what matters across business and tech</p>
      <div className="btn">
          <Link className="pricebtn" to="/subscribe">Subscribe for free</Link>
      </div>
      </div>
      </div>
      </div>
    </div>
      <div className="inner-content25">
          <Link className="text" to="/about">" It's designed to be scrolled, but not doomscrolled.</Link>
      <div className="tag">
      <p>
        CHRIS SIGNORE
      </p>
      <p>
        Author
      </p>
      </div>
      </div>
    </div>
  );
}
