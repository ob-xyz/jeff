import { useEffect, useState, useRef } from "react";
import { Link } from "@remix-run/react";

import logo from "~/../public/img/ja1.png";
import promoads from "~/../public/img/promoted-ads.png";
import takeoverads from "~/../public/img/takeover-ads.png";
import textads from "~/../public/img/text-ads.png";
import sama from "~/../public/img/samae.jpg";
import tobi from "~/../public/img/tobic.jpg";
import jensen from "~/../public/img/jensene.jpg";
import newads from "~/../public/img/newads.jpg";
import convertads from "~/../public/img/convertads.jpg";
import takeoverbg from "~/../public/img/takeoverbg.jpg";
import trump from "~/../public/img/trump.webp";
import mainbg from "~/../public/img/mainbg.png";
import dd from "~/../public/img/rocket.jpg";
import handcoin from "~/../public/img/handcoin.jpg";
import bg from "~/../public/img/bg.jpg";
import bg1 from "~/../public/img/bg1.jpg";
import linkedin from "~/../public/img/in.png";
import ig from "~/../public/img/ig.png";
import x from "~/../public/img/x.png";
import email from "~/../public/img/email.png";
const rotatingWords = ["on Wall Street.", "in Silicon Valley.", "across the world."];
const ads = [
  {
    image: promoads,
    title: "Promoted Ads",
    description:
      "Promoted ads allow you to showcase your product or service with a single image or gif.",
  },
  {
    image: takeoverads,
    title: "Takeover Ads",
    description:
      "Our most premium mass-reach placements that drive more engagement and results.",
  },
  {
    image: textads,
    title: "Text Ads",
    description:
      "The easiest way to promote a press release or quick thought to our most loyal readers.",
  },
];

export default function Index() {
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [adIndex, setAdIndex] = useState(0);

  const mainFormRef = useRef<HTMLFormElement>(null);
  const gettingStartedFormRef = useRef<HTMLFormElement>(null);

  // Rotate the words with fade effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % rotatingWords.length);
        setFadeOut(false);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Load hCaptcha script once and setup global callback
  useEffect(() => {
    if (!document.getElementById("hcaptcha-script")) {
      const script = document.createElement("script");
      script.id = "hcaptcha-script";
      script.src = "https://js.hcaptcha.com/1/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    (window as any).onSubmit = function () {
      if (
        mainFormRef.current &&
        mainFormRef.current.getAttribute("data-hcaptcha-active") === "true"
      ) {
        mainFormRef.current.submit();
      } else if (
        gettingStartedFormRef.current &&
        gettingStartedFormRef.current.getAttribute("data-hcaptcha-active") === "true"
      ) {
        gettingStartedFormRef.current.submit();
      }
    };
  }, []);

  // Ads carousel next/prev
  const next = () => setAdIndex((prev) => (prev + 1) % ads.length);
  const prev = () => setAdIndex((prev) => (prev - 1 + ads.length) % ads.length);

  // Handle main form submit with hCaptcha
  const handleMainFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ((window as any).hcaptcha && mainFormRef.current) {
      mainFormRef.current.setAttribute("data-hcaptcha-active", "true");
      (window as any).hcaptcha.execute();
    } else {
      e.currentTarget.submit();
    }
  };

  // Handle getting started form submit with hCaptcha
  const handleGettingStartedSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if ((window as any).hcaptcha && gettingStartedFormRef.current) {
      gettingStartedFormRef.current.setAttribute("data-hcaptcha-active", "true");
      (window as any).hcaptcha.execute();
    } else {
      e.currentTarget.submit();
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Jeffamzn Logo" />
      </div>
      <div className="content">
        <div className="inner-content">
          <div className="text">
            <h4>JEFFAMZN</h4>
            <h1>
              Don't start your day without knowing what's happening <br />
              <span className={`${fadeOut ? "fade-out" : "fade-in"}`}>
                {rotatingWords[index]}
              </span>
            </h1>
            <p>Subscribe to stay informed.</p>
          </div>
          <form
            ref={mainFormRef}
            method="post"
            action="https://app.jeffamzn.com/subscription/form"
            onSubmit={handleMainFormSubmit}
          >
            <div className="input-wrapper">
              <input
                className="email"
                type="email"
                name="email"
                required
                placeholder="Email Address *"
              />
              <button className="submit" type="submit">
                Subscribe
              </button>
            </div>

            {/* Invisible hCaptcha widget */}
            <div
              className="h-captcha"
              data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"
              data-callback="onSubmit"
              data-size="invisible"
            ></div>

            <input
              id="6d48f"
              type="hidden"
              name="l"
              value="6d48fffe-7d37-4c14-b317-3e4cda33a647"
            />
            <input type="hidden" name="nonce" />
          </form>
        </div>
        <img src={mainbg} alt="Background" />
      </div>
      <div className="inner-content2">
        <h2>The <span>one newsletter</span> that helps you stay informed</h2>
        <Link to="#"><p>Every day Jeffamzn sends you a quick timeline of what's happening in the world. Easy to digest. And read by the most authoritative minds in business.</p></Link>
      </div>
      <div className="inner-content3">
        <div className="box">
          <img src={trump} />
        </div>
        <div className="box">
          <img src={handcoin} />
        </div>
        <div className="box">
          <img src={dd} />
        </div>
      </div>
      <div className="inner-content4">
            <h3>Delivered straight to your inbox.</h3>
            <p>Jeffamzn is not the only way to know what's happening in the world. But it's a pretty good way to know what's happening in the world. Don't start your day without knowing what's really happening.</p>
      </div>
      <div className="inner-content5">
        <div className="box">
          <img src={sama} />
          <h1>Every story that matters</h1>
          <p>Get every business news story that matters delivered straight to your inbox every day.</p>
        </div>
        <div className="box">
          <img src={tobi} />
          <h1>An audience with authority</h1>
          <p>Join high powered tech execs, founders, and 9 figure operators who want to know what's really going on in the world.</p>
        </div>
        <div className="box">
          <img src={jensen} />
          <h1>Enjoy smarter conversations</h1>
          <p>Have more informed and smarter conversations with colleagues, customers and friends.</p>
        </div>
      </div>
      <div className="btn">
        <Link to="#" className="pricebtn">
            Sign up for free
      </Link>
      </div>
      <div className="inner-content7">
            <div className="text">
            <h4>ADVERTISE WITH US</h4>
            <h3>Connect with your next customers on Jeffamzn.</h3>
            </div>
            <p>Jeffamzn's audience is authoritative, engaged, and constantly in discovery mode.</p>
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
      <div className="btn">
        <a href="mailto:hey@jeffamzn.com" className="pricebtn">
            Start a campaign
      </a>
      </div>
      <div className="inner-content10">
        <div className="header">
            <h4>MOST POPULAR</h4>
            <h3>Promoted Ads.</h3>
        </div>
        <div className="grid">
        <div className="box">
          <img src={convertads} />
          <h1>Promote a post from LinkedIn, Instagram, or X</h1>
          <p>Have a successful post on social? promote it to our audience and increase your engagement.</p>
        </div>
        <div className="box">
          <img src={newads} />
          <h1>Use existing Meta and LinkedIn ad campaigns</h1>
          <p>Give your existing Meta or LinkedIn ad campaigns an extra boost as email newsletter ads.</p>
        </div>
        </div>
      </div>
      <div className="inner-content11">
        <div className="header">
            <h4>TAKEOVER OUR TIMELINE</h4>
            <h3>Widen your ad.</h3>
        </div>
        <div className="grid">
        <div className="box">
          <img src={takeoverbg} />
          <h1>Takeover Ads</h1>
          <p>Give your favorite ads a widescreen image experience that takes over our timeline and maximizes engagement.</p>
        </div>
        </div>
      </div>
      <div className="inner-content12">
      <div className="header">
        <h4>GETTING STARTED</h4>
        <h3>Start your journey with Jeffamzn.</h3>
      </div>
              <div className="grid">
          <div className="box">
            <img src={bg} alt="Sign up free" />
            <h1>Sign up for free</h1>
            <p>
              Sign up for free to get the most authoritative business newsletter
              in the world, delivered straight to your inbox every day.
            </p>
            <form
              ref={gettingStartedFormRef}
              method="post"
              action="https://app.jeffamzn.com/subscription/form"
              target="_blank"
              onSubmit={handleGettingStartedSubmit}
            >
              <div className="input-wrapper">
                <input
                  className="email"
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address *"
                />
                <button className="submit" type="submit">
                  Sign up
                </button>
              </div>

              <div
                className="h-captcha"
                data-sitekey="7e96e6a6-eef8-4624-be9c-e468b5a8b230"
                data-callback="onSubmit"
                data-size="invisible"
              ></div>

              <input
                id="6d48f"
                type="hidden"
                name="l"
                value="6d48fffe-7d37-4c14-b317-3e4cda33a647"
              />
              <input type="hidden" name="nonce" />
            </form>
      </div>
      <div className="box">
        <img src={bg1} />
        <h1>Start advertising with us</h1>
        <p>Start or expand your marketing funnel by placing your ads exactly where people do business — the email inbox.</p>
        <a href="mailto:hey@jeffamzn.com" className="pricebtn">
            Start a campaign
        </a>
      </div>
      </div>
      </div>
{/* <div className="inner-blog">
    <div className="header">
          <h4>JEFFAMZN NEWS</h4>
          <h3>The latest and greatest.</h3>
    </div>
    <ul className="grid">
    {campaigns.length === 0 ? (
      <li>No campaigns available yet.</li>
    ) : (
      campaigns.slice(0, 6).map((c) => (
        <li key={c.id} className="box">
          <a href={c.url} target="_blank" rel="noopener noreferrer">
            <img src="https://jeffamazn.com/GsidegWXwAECEUs.jpeg" alt="You gotta see this" />
            <h2>{c.subject}</h2>
            <p>{new Date(c.send_at).toLocaleDateString()}</p> 
          </a>
        </li>
      ))
    )}
  </ul>
</div> */}

<div className="inner-blog">
      <div className="header">
          <h4>JEFFAMZN NEWS</h4>
          <h3>The latest and greatest.</h3>
      </div>
  <ul className="grid">
    <li className="box">
      <a
        href="http://app.jeffamzn.com/campaign/ba97f2f9-a8c7-46a7-b183-ccffbc3b6891/6716369b-5785-4c74-be76-73af2558eebb"
        rel="noopener noreferrer"
      >
        <img src="https://jeffamazn.com/Screen-Shot-2025-06-03-at-5.09.08-PM.png" alt="Test Campaign Preview" />
        <h2>Test Campaign — Preview</h2>
        <p>June 29, 2025</p>
      </a>
    </li>
  </ul>
</div>
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer-links">
          <div className="column">
            <h4>Company</h4>
            <Link to="#">About</Link>
            <a href="mailto:press@jeffamzn.com">Press</a>
            <a href="mailto:job@jeffamzn.com">Careers</a>
          </div>
          <div className="column">
            <h4>Ads</h4>
            <a href="mailto:plan@jeffamzn.com">Request Plan</a>
            <a href="https://app.jeffamzn.com/campaign/9f60dcc3-107c-4075-94a8-cb5c96a36423/6716369b-5785-4c74-be76-73af2558eebb" rel="noopener noreferrer">Media Kit</a>
            <a href="https://app.jeffamzn.com/campaign/b80e7e1c-c9b6-4eee-9809-602e24a0a2f8/6716369b-5785-4c74-be76-73af2558eebb" rel="noopener noreferrer">Rate Card</a>
          </div>
          <div className="column">
            <h4>Support</h4>
            <Link to="#">Getting Started</Link>
            <Link to="#">Archive</Link>
            <a href="mailto:hey@jeffamzn.com">Contact</a>
          </div>
          <div className="column">
            <h4>Jeffamzn</h4>
            <a href="mailto:buy@jeffamzn.com">Start a Campaign</a>
            <Link to="#">Case Studies</Link>
            <Link to="#">Sign up</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-meta">
        <a href="https://policies.google.com/privacy?hl=en-US" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        <a href="https://policies.google.com/terms?hl=en-US" target="_blank" rel="noopener noreferrer">
          Terms of Service
        </a>
        </div>
        <div className="footer-social">
        <a href="https://instagram.com/jeffamzn" target="_blank" rel="noopener noreferrer">
          <img src={ig} alt="Instagram" />
        </a>
        <a href="https://x.com/jeffamzn" target="_blank" rel="noopener noreferrer">
          <img src={x} alt="X (formerly Twitter)" />
        </a>
        <a href="https://linkedin.com/company/jeffamzn" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="mailto:hey@jeffamzn.com">
          <img src={email} alt="Email us" />
        </a>
    
        </div>
   </div>
      </div>
    </div>
  );
}