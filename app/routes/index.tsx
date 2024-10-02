import logo from "~/../public/img/ja.png";

export default function Index() {
  return (
    <div className="container">
      <div className="inner-content">
      <a className="none" href="https://app.jeffamzn.com/subscription/form"><img src={logo} /></a>
      <p>We're some of the most influential readers in the world.</p>
      <a href="https://app.jeffamzn.com/subscription/form">Subscribe</a>
      </div>
    </div>
  );
}