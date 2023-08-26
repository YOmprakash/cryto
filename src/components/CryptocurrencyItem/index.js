// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails
  return (
    <div className="item-container">
      <img src={currencyLogo} alt={currencyName} className="avatar" />
      <p className="text">{currencyName}</p>
      <div className="sub-item">
        <p className="text">{usdValue}</p>
        <p className="text">{euroValue}</p>
      </div>
    </div>
  )
}

export default CryptocurrencyItem
