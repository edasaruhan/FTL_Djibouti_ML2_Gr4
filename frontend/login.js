import { useState } from "react";
import { login } from "./services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await login(email, password);
    if (res.token) {
      setMessage("Login successful! Token: " + res.token);
      localStorage.setItem("token", res.token);
    } else {
      setMessage("Error: " + res.error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        required
      />
      <input
        type="password"
        placeholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
      />
      <button type="submit">Se connecter</button>
      <p>{message}</p>
    </form>
  );
}
