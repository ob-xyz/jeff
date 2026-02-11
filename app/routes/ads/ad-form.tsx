import { Link } from "@remix-run/react";
import Altcha from "../../components/altcha";


import logo from "~/../public/img/ja2.png";
import header from "~/../public/img/ads/imageads.png";

export default function Index() {
  return (
    <div className="adform-container">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>ADVERTISE WITH US</h4>
            <h1>Reach 42K+</h1>
          </div>
                      <form method="post" action="https://app.jeffamzn.com/subscription/form">
                        <input className="email mb" type="text" name="firstName" required placeholder="First Name *" />
                        <input className="email mb" type="text" name="lastName" required placeholder="Last Name *" />
                        <input className="email mb" type="text" name="company" required placeholder="Company *" />
                        <div className="input-wrapper">
                          <input className="email" type="email" name="email" required placeholder="Business Email Address *" />
                          <button className="submit" type="submit">Let's do it</button>
                        </div>
                        <Altcha />
                        <input id="82687" type="hidden" name="l" value="82687238-ae68-46c7-98ad-183fbf4cfea0" />
                        <input type="hidden" name="nonce" />
                      </form>
        </div>
        <div className="inner-content1">
          <img src={header} alt="Jeffamazon newsletter image" />
        </div>
      </div>
      <div className="inner-content2">
        <h2>Connect with your next customers on <span>Jeffamazon</span></h2>
        <Link className="text" to="/ads/ad-form">
          Our audience is highly vetted, decisive, and always looking for what's new. 
          So whether you want to use videos, images, or words, there's a Jeffamazon 
          ad format that'll help you reach our audience.
        </Link>
      </div>
    </div>
  );
}