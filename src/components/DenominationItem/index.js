// Write your code here
import {Component} from 'react'
import './index.css'

class DenominationItem extends Component {
  render() {
    const {fig, add} = this.props
    return (
      <li>
        <button type="button" onClick={add(fig)}>
          {fig}
        </button>
      </li>
    )
  }
}

export default DenominationItem
