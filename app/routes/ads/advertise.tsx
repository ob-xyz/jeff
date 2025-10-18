import { useEffect, useState } from "react";

import logo from "~/../public/img/ja1.png";
import promoads from "~/../public/img/promoted-ads.png";
import takeoverads from "~/../public/img/takeover-ads.png";
import textads from "~/../public/img/text-ads.png";
import bg1 from "~/../public/img/bg.jpg";

const ads = [
  {
    image: promoads,
    title: "Promoted Ads",
    description:
      "Showcase your product or service with a single image, six-images, or a short video.",
  },  
  {
    image: textads,
    title: "Text Ads",
    description:
      "Use plain jane words to get your brand in front of our audience.",
  },
  {
    image: takeoverads,
    title: "Takeover Ads",
    description:
      "Highlight your product or service with a full screen image and bolded header.",
  },
];

export default function Index() {
  const [adIndex, setAdIndex] = useState(0);

  // Ads carousel handlers (unchanged)
  const next = () => setAdIndex((prev) => (prev + 1) % ads.length);
  const prev = () => setAdIndex((prev) => (prev - 1 + ads.length) % ads.length);
  
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
  <div className="content-awu">
    <div className="logo">
      <img src={logo} alt="Jeffamzn Logo" />
    </div>
    <div className="content-awu2">
          <div className="text">
          <h4>ADVERTISE</h4>
          <h3>Jeffamzn ad formats.</h3>
          </div>
          <p>Jeffamzn offers a variety of formats for advertisers to showcase their content to our audience of over 10,000 tech execs, founders, and entrepreneurs.</p>
    </div>
    <div className="ads-carousel-txt">
    <div className="adsbox">
      <p>Promoted Ads can support a variety of media formats through the following sub-categories:</p>
    <ul>
      <li>
        <b>Image Ads </b>
        allow you to showcase your product or service with a single photo
      </li>
      <li>
        <b>Video Ads </b>
        make products feel alive while driving people to your website, app, or brand message.
      </li>
      <li>
        <b>Carousel Ads </b>
        automatically rotate up to six horizontally-shaped images to showcase multiple products or promotions.
      </li>
      <li>
        <b>Text Ads </b>
        are the most simple and low touch way to introduce something or communicate a message straight to our audience.
      </li>
    </ul>
    <div className="btn">
    <a href="mailto:hey@jeffamzn.com" className="pricebtn">
          Start a campaign
    </a>
    </div>
    </div>

    <div className="ads-carousel">
      <button className="carousel-button prev" onClick={prev}>◀</button>
      <button className="carousel-button next" onClick={next}>▶</button>
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${adIndex * 100}%)` }}
      >
        {ads.map((ad, i) => (
          <div className="carousel-slide" key={i}>
            <div className="box">
              <img src={ad.image} alt={ad.title} />
              <h1>{ad.title}</h1>
              <p>{ad.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>

    <div className="content-awu6">
    <div className="header">
      <h4>ADVERTISE WITH US</h4>
      <h3>Using 3 or more ad formats increases campaign awareness by 20% and purchase intent by 7%.</h3>
      <p>Source: Nielsen Brand Effect (US/UK/JP/CA), Q3 2015 - Q3 2018 Connect campaigns. Comparison is v. 1 ad format alone.</p>
    </div>
    </div>
  </div>
  );
}