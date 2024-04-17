import { useContext, useEffect, useState } from "react"
import PerAsset from "../pure/perAsset";
import '../../styles/styleWallet.scss'
import { getTransactions, obtainProduct } from "../../services/dashboardService";
import { UserContext } from "../../contexts/user.context";

function WalletSection() {

  const { loggedUser } = useContext(UserContext);

  const [transactions, setTransactions] = useState([]);
  const [assets, setAsset] = useState([]);

  let listOfAssets = assets.length !== 0 ? assets : [];
  let listOfTransactions = transactions.length !== 0 ? transactions : [];

  useEffect(()=>{
    obtainProduct().then((data)=> {
      data.length !== 0 ? setAsset(data) : setAsset([])
    })
    console.log(loggedUser.getId())
    getTransactions(loggedUser.id).then((data) => {
      data.length !== 0 ? setTransactions(data) : setTransactions([])
    })
  },[loggedUser])

  return (
    <div className="col-9 wallet-init wallet-area" >
      <h1 className="d-flex justify-content-center wallet-title" >CryptoCurrency Assets</h1>
      <table className="table table-borderless align-middle ">
        <thead>
          <tr>
            <th scope="col">Symbol</th>
            <th scope="col">Name</th>
            <th scope="col">Per Currency in USD</th>
            <th scope="col">Balance</th>
            <th scope="col">In USD</th>
          </tr>
        </thead>
        <tbody>
          { listOfAssets.map((data, index)=>{
            return <PerAsset key={index} asset={data} totalQuantity={listOfTransactions
          .filter(value => value.currency === data.productName) } />
          })}
        </tbody>
      </table>
      
      
    </div>
  )
}

export default WalletSection