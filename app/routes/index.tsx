import { useEffect } from "react";
import logo from "~/../public/img/ja2.png";

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
         <p>All access. Zero BS news.</p>
         <p>Real stories and insights from business and tech people like me and you.<br></br>One daily newsletter.</p>
      </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
          {/* <input type="text" name="name" placeholder="Enter Your Name" /> */}
          <p><input className="email" type="email" name="email" required placeholder="Enter Your Email" /></p>
          <p><input className="submit" type="submit" value="Get access" /></p>
          <div class="h-captcha" data-sitekey="db0e76a6-3d84-4378-abe6-88526faac9d2"></div>
          <input id="b2958" type="hidden" name="l" checked value="b2958bdd-ba18-4541-aff7-58c773cbcb7d" />
          <input type="hidden" name="nonce" />
      </form>
      </div>
      </div>
  );
}