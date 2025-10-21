import Simplelayout from "../components/Layout/SimpleLayout";

const PrivacyPolicy: React.FC = () => {
  return (
    <Simplelayout>
      <section className="section-container">
        <h1>Privacy of policy</h1>
        <div className="section-body">
          <p>Last revision: October 21, 2025.</p>

          <p>
            This is a simple and transparent privacy policy for the
            <strong>ShopTS project.</strong> We respect your privacy and data
            security and want you to know exactly how your information is (or
            isn't) used here.
          </p>

          <p>
            <strong>ShopTS</strong> is an e-commerce application created
            exclusively for{" "}
            <strong>portfolio study and demonstration purposes</strong>.
          </p>

          <h2>1. Personal and Transaction Data</h2>
          <p>
            <strong>We do not collect, store, or share personal</strong>{" "}
            registration, login, or payment information.
          </p>
          <ul>
            <li>
              <strong>Purchase Simulation:</strong> The cart and checkout
              process is purely for demonstration purposes of the Front-end
              functionality.{" "}
              <strong>No actual financial transactions are processed</strong>.
            </li>
            <li>
              <strong>User Accounts:</strong> If the application simulates a
              login, credentials and cart states are only stored locally in your
              browser.
            </li>
            <li>
              <strong>APIs and Services:</strong> No external APIs or services
              are used to process, track, or monetize your activity in the app.
            </li>
          </ul>

          <h2>2. Data Storage</h2>
          <p>
            Any information you enter, such as items added to your cart or
            interface settings, is either stored only locally (using
            LocalStorage or your browser's memory) or simulated by mocking tools
            (such as JSON Server).
          </p>
          <p>By using ShopTS, you agree that:</p>
          <ul>
            <li>Your usage data is yours and you have full control over it.</li>
            <li>
              If you close the app or clear your browser's local data,{" "}
              <strong>all simulated information will be erased</strong>.
            </li>
          </ul>

          <h2>3. Purpose</h2>
          <p>
            This application was created solely for educational purposes and to
            demonstrate web development skills.
          </p>
          <p>
            If you have any questions about the application architecture or the
            use of technologies, feel free to contact us through the contact
            page.
          </p>
        </div>
      </section>
    </Simplelayout>
  );
};

export default PrivacyPolicy;
