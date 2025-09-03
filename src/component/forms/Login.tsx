import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sungjinwoo from "../../assets/sungjinwoo.png";

const Login = () => {
  const validUsername = "txt3e_";
  const validPassword = "oct25";
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === validUsername && password === validPassword) {
      setError("");
      navigate("/home");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-[85%] md:w-[50%] p-6 rounded-lg shadow-md"
      >
        <img
          src={sungjinwoo}
          alt="login_img"
          className="md:h-40 h-36 md:w-40 mx-auto"
        />
        <h2 className="text-xl font-bold mb-4 text-blue-800 text-center my-3">
          Login
        </h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 border border-gray-200 rounded mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-200 rounded mb-3"
        />

        <button
          type="submit"
          className="w-full bg-blue-700 text-white p-2 rounded hover:bg-blue-800"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
