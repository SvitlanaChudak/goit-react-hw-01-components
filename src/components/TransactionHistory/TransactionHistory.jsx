import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'
import getRandomHexColor from 'utils/getRandomColor';

export const TransactionHistory = ({ items }) => {
    return  <table className={css.transaction_history}>
  <thead className={css.head}>
    <tr className={css.head_row} style={{ backgroundColor:getRandomHexColor() }}>
      <th className={css.cell}>Type</th>
      <th className={css.cell}>Amount</th>
      <th className={css.cell}>Currency</th>
    </tr>
  </thead>

<tbody className={css.body}>
{items.map(item => (
<tr className={css.body_row} key={item.id}>
    <td className={css.cell} >{item.type}</td>
    <td className={css.cell}>{item.amount}</td>
    <td className={css.cell}>{item.currency}</td>
</tr>
    ))}
  </tbody>
</table>
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),)
};