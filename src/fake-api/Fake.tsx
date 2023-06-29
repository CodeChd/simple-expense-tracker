import { styled } from "styled-components";
import userService, { ResData } from "../services/userService";
import useUsers from "../services/useUsers";

const Loading = styled.p`
  font-size: 1rem;
  font-style: italic;
`;

const Fake = () => {
 //custom hook
  const  {users, errMsg, loading, setUsers, setErrMsg} = useUsers();
 

  const deleteUser = (user: ResData) => {
    setUsers(users.filter((users) => users.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setErrMsg(err.message);
      setUsers([...users]);
    });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Carl" };
    setUsers([...users, newUser]);

    userService
      .create(newUser)
      .then((data) => setUsers([...users, data.data]));
  };

  const updateUser = (user: ResData) => {
    const updatedUser = { ...user, name: user.name + " hello" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {  
      setErrMsg(err.message);
      setUsers([...users]);
    });
  };

  return (
    <div>
      {loading && <Loading className="sline-border">Loading...</Loading>}

      <p className="text-danger">{errMsg}</p>

      <ul className="list-group">
        {users.map((users) => (
          <li
            key={users.id}
            className="list-group-item d-flex justify-content-between"
          >
            {users.name}{" "}
            <div>
              <button
                className="btn btn-outline-success m-2"
                onClick={() => updateUser(users)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(users)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary mt-3" onClick={addUser}>
        Add User
      </button>
    </div>
  );
};

export default Fake;
