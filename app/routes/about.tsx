import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
        <h2>Every day is a <span>businesss day.</span></h2>
        <p>Every day of the week Jeffamzn delivers a free one minute business newsletter for people who hate newsletters.</p>
      </div>
  </div>
  );
}