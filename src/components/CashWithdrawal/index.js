import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  cashDeductionFromAccount = value => {
    this.setState(prevState => ({cash: prevState.cash - value}))
  }

  render() {
    const {cash} = this.state
    const {denominationsList} = this.props
    return (
      <div className="main-container">
        <div className="name-container">
          <h1 className="S-symbol">S</h1>
          <h1 className="name">Sarah Williams</h1>
        </div>
        <div className="balance-container">
          <p className="balance-title">Your Balance</p>
          <div>
            <p className="balance">{cash}</p>
            <p className="balance-txt">In Rupees</p>
          </div>
        </div>
        <p className="withdraw-title">Withdraw</p>
        <p className="choose-sum-txt">CHOOSE SUM (IN RUPEES)</p>
        <ul>
          {denominationsList.map(eachObj => (
            <DenominationItem
              eachDenomination={eachObj}
              key={eachObj.id}
              cashDeductionFromAccount={this.cashDeductionFromAccount}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
