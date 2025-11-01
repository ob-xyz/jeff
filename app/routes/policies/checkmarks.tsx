import { useEffect } from "react";

import logo from "~/../public/img/ja1.png";
import bluecheck from "~/../public/img/bluecheck.png";
import goldcheck from "~/../public/img/goldcheck.png";
import graycheck from "~/../public/img/graycheck.png";
import whitecheck from "~/../public/img/whitecheck.png";
import pinkcheck from "~/../public/img/pinkcheck.png";



export default function Index() {
    useEffect(() => {
    // Dynamically load the hCaptcha script
    const script = document.createElement("script");
    script.src = "https://js.hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Clean up script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="content-verification">
      <div className="logo">
        <img src={logo} alt="Jeffamzn Logo" />
      </div>
      <div className="content-verification2">
        <h1>About checkmarks in the Jeffamzn newsletter.</h1>
        <p>Jeffamzn applies checkmarks as visual identity signals on account profiles to provide more context about—and help distinguish—different types of profiles. All of these indicators are applied by Jeffamzn, not the profile holder.</p>
        <div className="box">
        <h2>Blue checkmark</h2>
        <p>The blue checkmark means that a account is a real person who meets our eligibility requirements. These accounts typically always represent an individual and have under gone review and confirmation that confirms they meet the authentic content and people standards we ahere to.</p>
        <img src={bluecheck} alt="Checkmark" />
        </div>

        <div className="box">
        <h2>Gold checkmark</h2>
        <p>The gold checkmark indicates that the account is an official organization, company, or business.</p>
        <img src={goldcheck} alt="Checkmark" />
        </div>

        <div className="box">
        <h2>Gray checkmark</h2>
        <p>The gray checkmark indicates that an account represents a government organization or is an official government representative.</p>
        <img src={graycheck} alt="Checkmark" />
        </div>

        <div className="box">
        <h2>White checkmark</h2>
        <p>The white checkmark indicates that an account is anonymous, pseudonymous, or a parody.</p>
        <img src={whitecheck} alt="Checkmark" />
        </div>

        <div className="box">
        <h2>Pink checkmark</h2>
        <p>The pink checkmark indicates that an account is an advertiser.</p>
        <img src={pinkcheck} alt="Checkmark" />
        </div>
      </div>
  </div>
  );
}