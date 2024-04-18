import { useContext, useEffect, useState } from "react";
import PerAsset from "../pure/perAsset";
import "../../styles/styleWallet.scss";
import {
  getTransactions,
  obtainProduct,
} from "../../services/dashboardService";
import { UserContext } from "../../contexts/user.context";
import Spinner from "../pure/spinner";

function WalletSection() {
  const { loggedUser } = useContext(UserContext);

  const [transactions, setTransactions] = useState([]);
  const [assets, setAsset] = useState([]);

  let listOfAssets = assets.length !== 0 ? assets : [];
  let listOfTransactions = transactions.length !== 0 ? transactions : [];

  useEffect(() => {
    obtainProduct().then((data) => {
      data.length !== 0 ? setAsset(data) : setAsset([]);
    });
    getTransactions(loggedUser.id).then((data) => {
      data.length !== 0 ? setTransactions(data) : setTransactions([]);
    });
  }, [loggedUser]);

  return (
    <div className="col-9 wallet-init">
      <h1 className="d-flex justify-content-center wallet-title">
        CryptoCurrency Assets
      </h1>
      { listOfTransactions.length !== 0 ? <table className="table table-borderless align-middle">
        <thead>
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col">Name</th>
            <th scope="col">Per Currency in USD</th>
            <th scope="col">Balance (Crypto)</th>
            <th scope="col">Balance in USD</th>
          </tr>
        </thead>
        <tbody>
          {listOfAssets.map((data, index) => {
            return (
              <PerAsset
                key={index}
                asset={data}
                totalQuantity={listOfTransactions.filter(
                  (value) => value.currency === data.productName
                )}
              />
            );
          })}
        </tbody>
      </table> : <Spinner/>}
    </div>
  );
}

export default WalletSection;
