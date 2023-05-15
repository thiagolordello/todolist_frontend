import axios from 'axios';
import React, { useState } from 'react';
import 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../style/register.css';
export default function Register() {
  const [inptLogin,setInptLogin] = useState('');
  const [passw, setPasswd] = useState('');
  const navigate = useNavigate(); 

  const postNewUserInBackend = async (nome, senha) => {
    try {
      const result = await axios.post('http://localhost:3001/register', {
        name:nome,
        password:senha,
      });
      const { id, name, password } = result.data;
      const newUser = {id, name, password};
      if(newUser) navigate('/login');
      return newUser;
    } catch (error) {
      return error;
    }
  }

  const declineRegister = () => {
    const redirectToRegister = `/login`;
    navigate(redirectToRegister);
}

    return (
      <div className='tela-login-register'>
        <div className='imagem1'></div>
        <form className='form-register2'>
          <h1>Crie sua conta</h1>
          <label htmlFor='username' className='form-label label-user1'>
            Usuário
            <input
              name='username'
              type='text'
              id='username-label'
              onChange={ (e) => { setInptLogin(e.target.value); } }
              className='form-control input-usr-name'
            />
          </label>
          <label htmlFor='password' className='form-label label-user2'>
            Senha
            <input
              name='password'
              type='password'
              id='password'
              onChange={ (e) => { setPasswd(e.target.value); } }
              className='form-control input-usr-passwd' 
            />   
          </label>
          <button
            id='btn-register'
            type='button'
            disabled=''
            onClick={ () => postNewUserInBackend(inptLogin, passw) }
            className='notHaveAccount2'
          >
            Cadastrar
          </button>

          <button
            id='btn-cancel'
            type='button'
            disabled=''
            onClick={ () => declineRegister() }
            className='notHaveAccount3'
          >
            Cancelar
          </button> 
        </form>
      </div>
    );
}

