import React from "react";

function Users(users) {
  console.log(users.users);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>tài khoản</td>
          </tr>
        </thead>
        <tbody>
          {users.users.map((el) => (
            <tr key={el._id}>
              <td>{el.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
