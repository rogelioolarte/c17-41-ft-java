import { useEffect, useState } from "react"
import { LIST_PRODUCTS } from "../../mocks/products.mocks"
import { LIST_TRANSACTIONS } from "../../mocks/transactions.mock"
import PerAsset from "../pure/perAsset";
import '../../styles/styleWallet.scss'
import { getTransactions, obtainProduct } from "../../services/dashboardService";

function WalletSection() {

  const [transactions, setTransactions] = useState([]);
  const [assets, setAsset] = useState([]);

  let listOfAssets = assets.length !== 0 ? assets : LIST_PRODUCTS;
  let listOfTransactions = transactions.length !== 0 ? transactions : LIST_TRANSACTIONS;

  useEffect(()=>{
    obtainProduct().then((data)=> {
      data.length !== 0 ? setAsset(data) : setAsset([])
    })
    getTransactions().then((data) => {
      data.length !== 0 ? setTransactions(data) : setTransactions([])
    })
  },[])

  return (
    <div className="col-9 wallet-init wallet-area" >
      <h1 className="d-flex justify-content-center wallet-title" >Assets</h1>
      <table className="table table-borderless align-middle ">
        <thead>
          <tr>
            <th scope="col">Currency(Symbol)</th>
            <th scope="col">Currency(Name)</th>
            <th scope="col">Currency(Per Currency in USD)</th>
            <th scope="col">Balance</th>
            <th scope="col">In USD</th>
          </tr>
        </thead>
        <tbody>
          { listOfAssets.map((data, index)=>{
            return <PerAsset key={index} asset={data} totalQuantity={listOfTransactions
          .filter(value => value.product.productName === data.productName) } />
          })}
        </tbody>
      </table>
      
      
    </div>
  )
}

export default WalletSection