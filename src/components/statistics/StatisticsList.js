import Statistics from './Statistics';
import PropTypes from 'prop-types';

function StatisticsList({ items }) {
  return (
    // <section className="statistics">
    //   <h2 className="title">Upload stats</h2>

    <ul className="stat-list">
      {items.map(item => (
        <li className="item" key={item.id}>
          <Statistics label={item.label} percentage={item.percentage} />
        </li>
      ))}
    </ul>
    // </section>
  );
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};
export default StatisticsList;
