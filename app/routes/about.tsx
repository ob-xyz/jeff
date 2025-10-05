import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
        <h2>News that <span>feels good</span> to read.</h2>
      <p>Every day Jeffamzn delivers a quick update on the latest and greatest stories happening in business and tech—with extra eyes on startups, strange business models, smart insights, and freshly minted hot takes. We're the <span>one minute newsletter</span> for people who hate five minute newsletters.</p>
      </div>
  </div>
  );
}