import { Link } from "react-router-dom";

const users = [
  {
    id: "1",
    name: "Azhan",
  },
  {
    id: "2",
    name: "Jamil",
  },
  {
    id: "3",
    name: "Asim",
  },
];

function UserList() {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;