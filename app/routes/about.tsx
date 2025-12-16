import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="Jeffamazon Logo" />
      </div>
      <div className="content-aboutus2">
      <h2>Become a real disruptor with <span>Jeffamazon</span></h2>
      <p>Every day Jeffamazon delivers a quick and insightful newsletter that helps you make sense of markets, technology, and distruptive business trends.</p>
      </div>
  </div>
  );
}