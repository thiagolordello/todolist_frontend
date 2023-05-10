import React from 'react';
import { useNavigate, } from 'react-router-dom';
import '../style/logout.css';
export default function EditTask() {
  const navigate = useNavigate();
 
  const exitFunction = () => {
    const redirectToLogin = '/logout/login';
    navigate(redirectToLogin);
  }

    return (
      <div className='tela-logout'>
        <div className='imgFake'></div>
        <form className='form-logout'>
          <h1>Logout efetuado com sucesso!</h1>
          <label htmlFor='description' className='form-label label-user1'>
            Retornar a pagina de login.
            <button
            id='btn-register'
            type='button'
            disabled=''
            onClick={ () => {exitFunction() }}
            className='btn-login'
          >
            Login
          </button>
          </label>
          
          
        
        </form>
      </div>
    );
}