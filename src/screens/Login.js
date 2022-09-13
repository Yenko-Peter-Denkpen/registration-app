import { useContext, useEffect } from "react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const { success, loading, user } = useContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success]);

  return (
    <form className="form">
      <div>
        <div className="form-group">
        <label htmlFor="email">email</label>
        <input type="text" className="form control" placeholder="example@gmail.com" value={email} />
        </div>

        <div className="form-group">
        <label htmlFor="password">password</label>
        <input type="password" className="form control" placeholder="password" value={password} />
        
        
        
        </div>
        <button type="submit">submit</button>
        <div className="row">
        I don't have an account
        <Link to="/register">Register</Link>
        
        </div>
      </div>
    </form>
  );
}

export default Login;
