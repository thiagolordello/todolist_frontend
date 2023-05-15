import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import todolistContext from '../context/to-do-list-Context';
import '../style/login.css';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();
    const { idUser, setIdUser } = useContext(todolistContext);
    const [inptLogin,setInptLogin] = useState('');
    const [passw, setPasswd] = useState('');
    useEffect(() => {
      // const idUserLocalStorage = JSON.parse(localStorage.getItem('id'));
        const isLoggedIn = () => {
          
          if(idUser){
            return navigate(`/tasks/${idUser}`);
          }
          else {
            navigate('/login'); 
          }
        };
        isLoggedIn();   
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idUser]);

    const btnNewRegister = () => {
        const redirectToRegister = '/register';
        navigate(redirectToRegister);
    }

    const loginUser = async (nme, passwrd) => {
        try {
           const result = await axios.post('http://localhost:3001/login', {
            name: nme,
            password: passwrd,
           });
           //console.log("Result: ", result)
           const { name, password, id, token } = result.data;
           setIdUser(id);

           localStorage.name = JSON.stringify({
             name,
             password,
             id,
             token,
           });

        } catch (error) {
            console.log(error);  
        }
    }
   
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
            onChange={ (e) => { setInptLogin(e.target.value); } } 
            className='input-user-name' 
          />  
          </label>
          <label htmlFor='password' className='form-label label-senha'>
            Senha
            <input
            name='password'
            type='password'
            id='password'
            onChange={ (e) => { setPasswd(e.target.value); } }
            className='input-user-passwd'
            />
          </label>
          <button
            type='button'
            onClick={ () => loginUser(inptLogin, passw) }
            className='notHaveAccount btn-login' 
          >
           Login 
          </button>
          
          <button
            type='button'
            onClick={ () => btnNewRegister() }
            className='notHaveAccount btn-not-account' 
          >
          Clique aqui para criar conta. 
          </button>  
        </form>
      </div>
    );
}

