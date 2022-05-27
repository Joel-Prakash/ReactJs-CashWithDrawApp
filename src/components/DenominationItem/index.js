import './index.css'

const DenominationItem = props => {
  const {eachDenomination, cashDeductionFromAccount} = props
  const {value} = eachDenomination

  const onClickingDenomination = () => {
    cashDeductionFromAccount(value)
  }

  return (
    <li>
      <button type="button" onClick={onClickingDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
