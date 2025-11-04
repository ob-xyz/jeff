import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
      <h2>We're the <span>daily newsletter</span> that actually feels good to read.</h2>
      <p>Every day Jeffamzn delivers a quick and insightful newsletter that helps you know what's really going on in the business world.</p>
      </div>
  </div>
  );
}