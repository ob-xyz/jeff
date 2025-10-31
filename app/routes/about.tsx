import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
      <h2>We're the <span>daily newsletter</span> that actually feels good to read.</h2>
      <p>Jeffamzn delivers real stories and insights on markets, trends, deals, and the economy every day of the week.</p>
      </div>
  </div>
  );
}