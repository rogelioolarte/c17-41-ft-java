import PropTypes from 'prop-types'
import '../../styles/styleWallet.scss'

function PerAsset({ asset, totalQuantity }) {
  return (
    <tr>
        <td>{ asset.symbol }</td>
        <td>{ asset.productName }</td>
        <td>{ asset.currentPrice }</td>
        <td>{ totalQuantity
          .reduce((total, transaction) => total + transaction.quantity, 0) }
        </td>
        <td>{ (totalQuantity
          .reduce((total, transaction) => total + transaction.quantity, 0) * asset.currentPrice).toFixed(2) }
        </td>
    </tr>
  )
}

PerAsset.propTypes = {
    asset: PropTypes.object.isRequired,
    totalQuantity: PropTypes.array.isRequired,
}

export default PerAsset
