import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import todolistContext from '../context/to-do-list-Context';
import '../style/login.css';
import axios from 'axios';

export default function Login() {
  const navigate = useNavigate();
  const { idUser, setIdUser } = useContext(todolistContext);
  const [inptLogin, setInptLogin] = useState('');
  const [passw, setPasswd] = useState('');

  useEffect(() => {
    const isLoggedIn = () => {
      if (idUser) {
        const redirectUrl = `/tasks/${idUser}`;
        navigate(redirectUrl);
      } else {
        navigate('/login');
      }
    };
    isLoggedIn();
  }, [idUser, navigate]);

  const btnNewRegister = () => {
    const redirectToRegister = '/register';
    navigate(redirectToRegister);
  };

  const loginUser = async (nme, passwrd) => {
    try {
      const result = await axios.post('https://to-do-list-backend-production-0a07.up.railway.app/login', {
        name: nme,
        password: passwrd,
      });
      const { name, password, id, token } = result.data;
      setIdUser(id);

      const userData = {
        name,
        password,
        id,
        token,
      };

      localStorage.setItem('userData', JSON.stringify(userData));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='tela-login form-login-background-login'>
      <form className='form-login'>
        <h1>Login</h1>
        <label htmlFor="name" className='form-label label-nome'>
          Nome
          <input
            name='name'
            type='text'
            id='name'
            onChange={(e) => { setInptLogin(e.target.value); }}
            className='input-user-name'
          />
        </label>
        <label htmlFor='password' className='form-label label-senha'>
          Senha
          <input
            name='password'
            type='password'
            id='password'
            onChange={(e) => { setPasswd(e.target.value); }}
            className='input-user-passwd'
          />
        </label>
        <button
          type='button'
          onClick={() => loginUser(inptLogin, passw)}
          className='notHaveAccount btn-login'
        >
          Login
        </button>

        <button
          type='button'
          onClick={() => btnNewRegister()}
          className='notHaveAccount btn-not-account'
        >
          Clique aqui para criar conta.
        </button>
      </form>
    </div>
  );
}
