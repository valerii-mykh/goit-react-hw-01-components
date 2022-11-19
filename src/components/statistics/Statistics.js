import style from 'components/statistics/Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ id, label, percentage }) => {
  return (
    <li>
      <span class="label">{label}</span>
      <span class="percentage">{percentage}</span>
    </li>
  );
};

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
