import UserCard from "./components/UserCard";
import users from './path/user.json';

export default function App() {
    return (<div>
    {users.map(user => (
    <UserCard
    key={user.avatar}
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
        />))}
        
    </div>);
}