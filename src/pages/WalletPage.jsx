// import WalletSection from "../components/pure/walletSection";
import { GoArrowRight } from "react-icons/go";
import "../styles/walletPage.scss";

function WalletPage() {
  return (
    <section className="container">
      <div className="wallet-section">
        <div className="wallet-section__left ">
          <h1>Amounts held</h1>
          <ul>
            <li>
              <GoArrowRight /> 135 USD
              <p>0.002036798614252747 BTC</p>
            </li>
            <li>
              <GoArrowRight /> 10 USD
              <p>0.002036798614252747 BTC</p>
            </li>
            <li>
              <GoArrowRight /> 135 USD
              <p>0.002036798614252747 BTC</p>
            </li>
          </ul>
        </div>

        <div className="wallet-section__right">
          <h1>Current pricing</h1>
          <ul>
            <li>
              <GoArrowRight /> 1 USD
              <p>0.000015087397142612942 BTC</p>
            </li>
            <li>
              <GoArrowRight /> 1 USD
              <p>0.000015087397142612942 BTC</p>
            </li>
            <li>
              <GoArrowRight /> 1 USD
              <p>0.000015087397142612942 BTC</p>
            </li>
          </ul>
        </div>
      </div>

      {/* <WalletSection></WalletSection> */}
    </section>
  );
}

export default WalletPage;
