import React, { useState } from "react";
import axios from "axios";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    width: "320px",
  },
  input: {
    margin: "5px",
  },
};

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submit() {
    const url = "http://localhost:4000/register";

    try {
      const result = await axios({
        url,
        method: "post",
        data: {
          username,
          password,
        },
      });

      console.log({ result });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={styles.container}>
      <input
        style={styles.input}
        name="username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        style={styles.input}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={styles.input} onClick={submit}>
        Login
      </button>
    </div>
  );
}
