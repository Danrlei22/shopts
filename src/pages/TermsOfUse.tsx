import Simplelayout from "../components/Layout/SimpleLayout";
import "../styles/_TermosOfUse.scss";

const TermsOfUse: React.FC = () => {
  return (
    <Simplelayout>
      <section className="section-container">
        <h1>Terms Of Use</h1>

        <div className="section-body">
          <p>Last revision: October 20, 2025.</p>
          <p>
            Welcome to ShopTS! By using our application, you agree to comply
            with the following terms and conditions.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using ShopTS, you agree to be bound by these terms.
            If you do not agree, please do not use our application.
          </p>
          <h2>2. Use of Application</h2>
          <p>
            ShopTS was developed to facilitate browsing, searching for, and
            purchasing various products. You agree to use the app only for
            lawful purposes and in accordance with these terms, and its use for
            any fraudulent or illegal activity is prohibited.
          </p>
          <h2>3. User Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account.
          </p>
          <h2>4. Limitation of Liability</h2>
          <p>
            ShopTS is provided "as is" without warranties of any kind. We are
            not liable for any damages arising from your use of the application.
          </p>
          <h2>5. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. Your
            continued use of ShopTS after changes indicates your acceptance of
            the new terms.
          </p>
        </div>
      </section>
    </Simplelayout>
  );
};

export default TermsOfUse;
