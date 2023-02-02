import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/auth-context";
import { useHttpClient } from "../Hooks/http-hook";
import "./Auth.css";

const Auth = () => {
  const auth = useContext(AuthContext);
  const { error, sendRequest, setError } = useHttpClient();
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const [securityCode, setSecurityCode] = useState()

  const submitLogin = async() => {
 
      console.log("submitted", userName, password)
      let res;
      try {
          res = await sendRequest('http://localhost:5000/api/user/login', 'post', {userName: userName, password: password, securityCode: "072497"});
          auth.login(res.data.userId, res.data.token)
      } catch (err) {
          alert(err)
      }
  }

  const userNameHandler = (e) => {
      setUserName(e)
      console.log(e)
   }

  const passwordHandler = (e) => {
      setPassword(e)
      console.log(e)
  }

  return (
    <div className="auth-wrapper">

      <div
      className="auth-form" 
      onSubmit={submitLogin}
      >
        <div className="auth-head">
        <h3><strong className="auth-start-letter">W</strong>elcome Back!</h3>
        <p>Sign in to access your data.</p>

        </div>
       
        <input
        className="auth-field"
          name="userName"
          placeholder="User Name"
          onChange={(e) => userNameHandler(e.target.value)}
        />
        <input
         className="auth-field"
          name="password"
          placeholder="Password"
          onChange={(e) => passwordHandler(e.target.value)}
        />
        {error && <p className="auth-error">Invalid Credentials. Please Try Again.</p>}
        <button onClick={submitLogin} className="auth-submit">LOGIN</button>
      </div>
    </div>
  );
};

export default Auth;
