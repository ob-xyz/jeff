import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import thepoast from "~/../public/img/thepoast.png";
import header3 from "~/../public/img/ja6.png";
import header4 from "~/../public/img/ja7.png";
import header2 from "~/../public/img/ja3.png";
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
            <Link className="pricebtn" to="/subscribe">Subscribe</Link>
      </div>
        </div>
        <div className="inner-content1">
            <img src={cs} alt="Jeffamazon newsletter image" />
        </div>
      </div>
      <div className="inner-content2">
      <h2>Is there ever a good time to brag?</h2>
          <Link className="text" to="/subscribe">I'm best known for my newsletter Jeffamazon.</Link>
          <br /><br /><br />
          <Link className="text" to="/subscribe">But I'm also a bootstrapped founder just learning how to build a company that'll design and engineer the things I want to exist in the world.</Link>
          <br /><br /><br />
          <Link className="text" to="/subscribe">Born and raised in a samll town. Commerce university grad. First job lasted 5 years working for Rick Hunter at ProSlide before I leaped.</Link>
          <br /><br /><br />
          <Link className="text" to="/subscribe">Landed head first in email newsletters. Slowly built my list. Vetted everyone. Re-taught myself how to code so I could design and build a newsletter content format I actually liked.</Link>
          <br /><br /><br />
          <Link className="text" to="/subscribe">Made it my thing. Doubled down. Iterated a million more times. And nowadays that's still pretty much all I do.</Link>
          <br /><br /><br />
          <Link className="text" to="/subscribe">Voted most likely to never sell a course or write a book. But my newsletter will always be free. If you have feedback or just want to talk the best way to reach me is <span>chris@jeffamazon.com</span></Link>
      </div>
      <div className="inner-content3sm">
      <div className="grid">
      <div className="boxmat">
         <div className="floatimg">
          <img src={header4} alt="Jeffamazon newsletter image" />
      </div>
      <div className="box">
        <h1>Jeffamazon</h1>
        <p>Daily business news</p>
      <div className="btn">
          <Link className="pricebtn" to="/subscribe">Subscribe for free</Link>
      </div>
      </div>
      </div>
      </div>
    </div>
      <div className="inner-content25">
          <Link className="text" to="/subscribe">" A big joy in my life is building things I can easily share with others.</Link>
      <div className="tag">
      <p>
        CHRIS SIGNORE
      </p>
      <p>
        Founder
      </p>
      </div>
      </div>
    </div>
  );
}
