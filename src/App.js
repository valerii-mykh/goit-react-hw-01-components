import UserCard from "components/UserCard";
import users from './path/user.json';
export default function App() {
    return (<div>
        <UserCard
            username={users.username}
            tag={users.tag}
            location={users.location}
            avatar={users.avatar}
            stats={users.stats}
        />
    </div>);
}