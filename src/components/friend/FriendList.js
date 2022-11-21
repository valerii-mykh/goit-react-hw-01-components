// import style from './FriendList.module.css';
import { Friend } from './Friend';
// import PropTypes from 'prop-types';

function FriendList({ stats }) {
  return (
    <ul className="friend_list">
      {stats.map(stat => (
        <Friend key={stat.id} />
      ))}
    </ul>
  );
}

export default FriendList;
