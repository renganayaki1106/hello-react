import React, { useState } from "react";

const TodoApp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
    if (user.some((u) => u.email === email)) {
      alert("User already exists");
      return;
    }
    setUser([...user, { name, email }]);
    setName("");
    setEmail("");
  };

  const handleDelete = (emailId) => {
    setUser(user.filter((u) => u.email !== emailId));
  };

  const handleDeleteAll = () => {
    setUser([]);
  };
  return (
    <div className="all-app">
      <h1>TodoApp</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <button className="btn">Add User</button>
      </form>
      {user.map((u) => (
        <div key={u.email}>
          {u.name}, {u.email}{" "}
          <button
            className="decrement btn"
            onClick={() => handleDelete(u.email)}
          >
            Delete
          </button>
        </div>
      ))}
      {user.length > 0 && (
        <button className="btn decrement" onClick={handleDeleteAll}>
          Delete All User
        </button>
      )}
    </div>
  );
};

export default TodoApp;
