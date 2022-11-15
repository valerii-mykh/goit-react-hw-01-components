import User from "./User";
function UserList({ items }) { 
    return (<ul>
        {items.map(item => (
            <li key={item.avatar}>
                <User
           
                    username={item.username}
                    tag={item.tag}
                    location={item.location}
                    avatar={item.avatar}
                    stats={item.stats}
                />
            </li>
        ))}
    </ul>);
}
export default UserList;