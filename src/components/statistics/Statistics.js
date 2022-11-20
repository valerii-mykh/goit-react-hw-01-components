import style from 'components/statistics/Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({ stats }) {
  return (
    <section className={style.statistics}>
      <h2 className={style.title}>Upload stats</h2>

      <ul className={style.stat_list}>
        {stats.map(stat => (
          <li className={style.item} key={stat.id}>
            <span className={style.label}> {stat.label} </span>
            <span className={style.percentage}> {stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
export default Statistics;
