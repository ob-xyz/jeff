import logo from "~/../public/img/ja1.png";
export default function Index() {
  return (
    <div className="content-aboutus">
      <div className="logo">
        <img src={logo} alt="The Poast Logo" />
      </div>
      <div className="content-aboutus2">
        <h2>Business news you can't <span>doomscroll.</span></h2>
        <p>Every day of the week Jeffamzn delivers a one minute newsletter for people who hate newsletters.</p>
      </div>
  </div>
  );
}