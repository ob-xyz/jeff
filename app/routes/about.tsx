import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
      <h2>We're <span>the internet's</span> fave newsletter.</h2>
      <p>Every day of the week, Jeffamzn delivers great takes on news, trends, the economy, and everything else that actually matters to people doing business in the business world.</p>
      </div>
  </div>
  );
}