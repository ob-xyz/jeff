import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
      <h2>We are <span>the streets</span> fave newsletter.</h2>
      <p>Every day of the week, Jeffamzn covers the latest news on business, the economy, and everything that actually matters to real people doing business in the business world.</p>
      </div>
  </div>
  );
}