// import WalletSection from "../components/pure/walletSection";
import NavBarB from "../components/container/NavBarB";
import WalletSection from "../components/container/walletSection";
import "../styles/walletPage.scss";

function WalletPage() {
  return (
    <div>
      <NavBarB/>
      <div className="d-flex justify-content-center"><WalletSection/></div>
    </div>
    
  );
}

export default WalletPage;
