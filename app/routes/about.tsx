import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
        <h2>Breaking <span>business</span> news.</h2>
      <p>Enjoy Jeffamzn's daily update of the latest and greatest stories happening in business and tech—with extra eyes on startups, strange business models, and newly minted hot takes. We're the <span>one minute newsletter</span> for people who hate five minute newsletters.</p>
      </div>
  </div>
  );
}