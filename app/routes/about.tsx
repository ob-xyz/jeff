import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
      <h2>We're <span>the internet's fave</span> newsletter.</h2>
      <p>Got a minute? We'll make you smarter about business and tech with one daily email of good stuff for you to know about.</p>
      </div>
  </div>
  );
}