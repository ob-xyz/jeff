import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
      <h2>We're <span>the internet's</span> fave email.</h2>
      <p>Got a minute? We'll help you catch the business news that actually matters today.</p>
      </div>
  </div>
  );
}