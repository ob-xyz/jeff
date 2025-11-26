import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content-aboutus2">
      <h2>Stay informed about the news with <span>Jeffamazon</span></h2>
      <p>Every day Jeffamazon delivers quick and insightful updates, helping you make sense of markets, technology, and current trends.</p>
      </div>
  </div>
  );
}