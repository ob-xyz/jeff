import logo from "~/../public/img/ja.png";

export default function Index() {
  return (
    <div className="container">
      <div className="inner-content">
      <a className="none" href="https://app.jeffamzn.com/subscription/form"><img src={logo} /></a>
      <p>Like TechCrunch, but funny.</p>
      <a href="https://app.jeffamzn.com/subscription/form">Subscribe</a>
      </div>
    </div>
  );
}