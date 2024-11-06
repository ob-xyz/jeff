import logo from "~/../public/img/ja.png";

export default function Index() {
  return (
    <div className="container">
            <img src={logo} />

      <div className="inner-content">
      <div className="text">
         <p>Hey there.</p>
         <p>I'm Jeffamzn, your no-BS friend making mornings in the business world even better.</p>
         <p>Gotta minute? Join my free newsletter. And you'll see why it's one of the most insightful newsletters in the world.</p>
      </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form">
          <input type="text" name="name" placeholder="First Name" />
          <p><input className="email" type="email" name="email" required placeholder="Email" /></p>
          <p><input className="submit" type="submit" value="Subscribe" /></p>
          <input id="9cc7a" type="hidden" name="l" checked value="9cc7aab4-4f23-4f01-8297-8138cfa4670d" />
          <input type="hidden" name="nonce" />
      </form>
      </div>
      </div>
  );
}