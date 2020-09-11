import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../styles/register.css";
import { auth } from "../firebase";

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className='register'>
      <Link to='/'>
        <img
          src='http://pngimg.com/uploads/amazon/amazon_PNG1.png'
          alt=''
          className='logo'
        />
      </Link>
      <div className='register__form'>
        <form>
          <h3>Sign In</h3>
          <label>Enter (Email or Password) for Sign In</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='Email'
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
          />
          <button onClick={signIn}>Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <div className='dontHaveAcc__text'>
          <hr />
          <span>New to Amazon</span>
          <hr />
        </div>
        <button onClick={register} className='register__create'>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Register;
