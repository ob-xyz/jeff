import logo from "~/../public/img/ja.png";

export default function Index() {
  return (
    <div className="container">
            <img src={logo} />

      <div className="inner-content">
      <div className="text">
         <p>Become smarter in just five minutes</p>
         <p>I'm Jeffamzn. And, every day I'll send you all the business news that matters.</p>
      </div>
      <form method="post" action="https://app.jeffamzn.com/subscription/form" class="listmonk-form">
          <input type="text" name="name" placeholder="First name" />
          <p><input className="email" type="email" name="email" required placeholder="Email" /></p>
          <p><input className="submit" type="submit" value="Subscribe" /></p>
          <input id="9cc7a" type="hidden" name="l" checked value="9cc7aab4-4f23-4f01-8297-8138cfa4670d" />
          <input type="hidden" name="nonce" />
      </form>
      </div>
      </div>
  );
}