import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
      <h2>Start your day smarter with <span>Jeffamzn</span></h2>
      <p>Every day Jeffamzn delivers quick and insightful updates, helping you make sense of markets, technology, and trends.</p>
      </div>
  </div>
  );
}