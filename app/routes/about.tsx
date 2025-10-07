import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
      <h2>We're <span>your fave business newsletter.</span></h2>
      <p>Every day <span>Jeffamzn</span> delivers business and tech news that feels good to read—with extra eyes on startups, strange business models, smart insights, and newly minted hot takes.</p>
      </div>
  </div>
  );
}