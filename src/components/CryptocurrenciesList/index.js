// Write your JS code here
import {Component} from 'react'

import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {currencyList: []}

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = response.json()

    const updatedData = data.map(each => ({
      id: each.id,
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
    }))
    this.setState({currencyList: updatedData})
  }

  render() {
    const {currencyList} = this.state
    return (
      <div className="list-container">
        <h1 className="heading">CryptocurrencyTracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="image"
        />
        <div className="list-item-container">
          <div className="header-container">
            <p className="title">Coin Type</p>
            <div className="sub-header-container">
              <p className="title">USD</p>
              <p className="title">EURO</p>
            </div>
            {currencyList.map(each => (
              <CryptocurrencyItem key={each.id} currencyDetails={each} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
