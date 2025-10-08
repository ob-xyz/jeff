import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
      <h2>We're your <span>fave</span> newsletter.</h2>
      <p>Jeffamzn delivers a daily email of good stuff for you to know about in business and tech—like cool startups, strange business models, smart insights, and newly minted hot takes.</p>
      </div>
  </div>
  );
}