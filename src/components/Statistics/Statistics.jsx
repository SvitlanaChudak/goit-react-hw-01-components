import PropTypes from 'prop-types';
import css from './Statistics.module.css'

import getRandomHexColor from 'utils/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className={css.stat_item}
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}</span>
            </li>
          );
        })}
      </ul>
    </section>
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),)
};
