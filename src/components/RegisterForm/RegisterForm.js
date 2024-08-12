import { useState } from "react";
import "./RegisterFormStyle.css";

function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    const formData = {
      name: name,
      email: email,
      birthDate: birthDate,
      address: address,
      phone: phone,
      username: username,
      password: password,
    };

    fetch("http://localhost:8080/api/account/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => alert("Error: " + error));
  }

  return (
    <form
      className="container d-flex flex-column gap-3 mt-4"
      onSubmit={handleSubmit}
    >
      <h3>Register New User</h3>

      <div>
        <label htmlFor="name" className="mb-2">
          Employee Name:{" "}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2">
          Email:{" "}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="birthDate" className="mb-2">
          Birth Date:{" "}
        </label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          className="form-control"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="address" className="mb-2">
          Address:{" "}
        </label>
        <input
          type="text"
          id="address"
          name="address"
          className="form-control"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-2">
          Phone:{" "}
        </label>
        <input
          type="text"
          id="phone"
          name="phone"
          className="form-control"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="username" className="mb-2">
          Username:{" "}
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="password" className="mb-2">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default RegisterForm;
