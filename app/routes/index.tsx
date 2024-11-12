import logo from "~/../public/img/ja2.png";

export default function Index() {
  return (
    <div className="container">
            <div className="logo"><img src={logo} /></div>

      <div className="inner-content">
      <div className="text">
         <p>Hey there.</p>
         <p>I'm Jeffamzn, your no-BS friend making good mornings in the business world even better.</p>
         <p>Gotta minute? Join my free newsletter. And you'll quickly see why it's one of the smartest ways to start your day.</p>
      </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
          <input type="text" name="name" placeholder="Name" />
          <p><input className="email" type="email" name="email" required placeholder="Email" /></p>
          <p><input className="submit" type="submit" value="Subscribe" /></p>
          <input id="b2958" type="hidden" name="l" checked value="b2958bdd-ba18-4541-aff7-58c773cbcb7d" />
          <input type="hidden" name="nonce" />
      </form>
      </div>
      </div>
  );
}