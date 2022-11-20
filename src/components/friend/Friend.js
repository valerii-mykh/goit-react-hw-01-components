// import style from './FriendList.module.css';
import PropTypes from 'prop-types';

function Friend({ stats }) {
  return (
    <ul className="friend_list">
      {stats.map(stat => (
        <li className="item" key={stat.id}>
          <span className="status">{stat.isOnline}</span>
          <img className="avatar" src={stat.avatar} alt="User avatar" width="48" />
          <p className="name">{stat.name}</p>
        </li>
      ))}
    </ul>
  );
}
Friend.propTypes = {
  stats: PropTypes.shape({
    avatar: PropTypes.string,
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    //   isOnline: PropTypes.bool,
  }),
};
export default Friend;
