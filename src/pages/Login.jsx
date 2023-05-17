import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import todolistContext from '../context/to-do-list-Context';
import '../style/login.css';
import axios from 'axios';

export default function Login() {
    const navigate = useNavigate();
    const { idUser, setIdUser } = useContext(todolistContext) ?? { idUser: null, setIdUser: () => {} };
    //const { idUser, setIdUser } = useContext(todolistContext);
    const [inptLogin,setInptLogin] = useState('');
    //const [testIdUser,setTestIdUser] = useState(null);
    const [passw, setPasswd] = useState('');
    useEffect(() => {
      // const idUserLocalStorage = JSON.parse(localStorage.getItem('id'));
       //console.log("IDUSER", idUserLocalStorage);  
      const isLoggedIn = () => {
          
          if(idUser){
            return navigate(`/tasks/${idUser}`);
          }
          else {
            navigate('/login'); 
          }

          // const isLoggedIn = () => {
          //   if (idUser !== null) {
          //     return navigate(`/tasks/${idUser}`);
          //   } else {
          //     navigate('/login'); 
          //   }
          // };
          

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
           console.log("Result id: ", result.data);
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
        <header aria-label="Login"> <h1 data-testid="titulo-login">Login</h1> </header>
          <label htmlFor="name" id='texto-label' className='form-label label-nome'>
          Nome
          <input
            name='name'
            type='text'
            id='name-input'
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
            name='btn-login'
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
