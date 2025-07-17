import { useState } from "react";
import "./App.css";
function App() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(
      `Welcome ${user.firstName} ${user.lastName} You'r Registered With Mail'id ${user.email}`
    );
  }
  return (
    <div className="container">
      <h1>Welcome To Complex Form</h1>
      <h2>
        Hello {user.firstName} {user.lastName}
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          type="text"
          value={user.firstName}
          placeholder="Enter Your First Name..."
          onChange={handleChange}
        />
        <input
          name="lastName"
          type="text"
          value={user.lastName}
          placeholder="Enter Your Last Name..."
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          value={user.email}
          placeholder="Enter Your Email..."
          onChange={handleChange}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
export default App;
