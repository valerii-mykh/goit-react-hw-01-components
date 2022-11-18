import style from 'components/statistics/Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ items }) => {
  return (
    <section class="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {items.map(item => (
          <li className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  //   stats: PropTypes.massive,
};

export default Statistics;
