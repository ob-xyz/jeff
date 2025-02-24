import { useEffect } from "react";
import logo from "~/../public/img/ja1.png";
import vid from "~/../public/img/vid.mp4";

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
    <div className="container">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="inner-content">
      <div className="text">
         <p>All access. Zero BS.</p>
         <p>Daily stories and humorous insights from citizens in tech, business, and stocks</p>
      </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
          {/* <input type="text" name="name" placeholder="Enter Your Name" /> */}
          <p><input className="email" type="email" name="email" required placeholder="Email" /></p>
          <p><input className="submit" type="submit" value="Subscribe" /></p>
          <div className="h-captcha" data-sitekey="db0e76a6-3d84-4378-abe6-88526faac9d2"></div>
          <input id="b2958" type="hidden" name="l" checked value="b2958bdd-ba18-4541-aff7-58c773cbcb7d" />
          <input type="hidden" name="nonce" />
      </form>
      </div>
      <div className="dn">
      <div className="line"></div>
      <h1>Wanna snack?</h1>
      <div className="line"></div>
      <video src={vid} autoPlay loop muted playsInline className="vid" />
      </div>
      </div>
  );
}