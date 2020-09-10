import React from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";

const Register = () => {
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
          <input type='text' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button>Continue</button>
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
        <button className='register__create'>Create your Amazon account</button>
      </div>
    </div>
  );
};

export default Register;
