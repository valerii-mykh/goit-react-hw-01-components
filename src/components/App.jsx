import Profile from './profile/Profile';
import user from '../data/user.json';
import StatisticsList from './statistics/StatisticsList';
import data from '../data/data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Upload stats" stats={data} />
    </div>
  );
};
