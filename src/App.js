import UserList from "./components/UserList";
import users from './user.json';

export default function App() {
    return (<div>
   <UserList items={users}/>
    </div>);
}