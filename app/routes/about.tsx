import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
      <h2>We're <span>the internet's</span> fave email.</h2>
      <p>Jeffamzn is a daily email of good stuff for you to know in business and tech. Got a minute? that's all it takes to stay informed by the internet's fave email.</p>
      </div>
  </div>
  );
}