// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  add = fig => {
    this.setState(p => {
      if (p.amount >= 0) {
        const dif = p.amount >= fig ? p.amount - fig : p.amount
        return {amount: dif}
      }
      return {amount: 0}
    })
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="d1">
        <div className="d2">
          <div className="name-Div">
            <p className="Symbol-name-Div">S</p>
            <h1 className="head-name-Div">Sarah Williams</h1>
          </div>
          <div className="balance-Div">
            <p className="p-balance-Div">Your Balance</p>
            <h1 className="head-balance-Div">{amount}</h1>
          </div>
          <p className="para-rep">In Rupees</p>
          <h1 className="withdraw-Head">Withdraw</h1>
          <p className="withdraw-Para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="dom-Div">
            {denominationsList.map(each => (
              <DenominationItem key={each.id} fig={each.value} add={this.add} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
