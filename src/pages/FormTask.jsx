import axios from 'axios';
import React, { useState, useRef } from 'react';
import 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../style/register.css';
export default function Register() {
  const [inptDescpt,setInptDescpt] = useState('');
  const [stat, setStat] = useState('Pendente');
  const navigate = useNavigate();
  const ref = useRef(null); 

 
  const userLogged = () => {
    try {

      const data_usr = JSON.parse(localStorage.getItem('name'));
      return data_usr.id;
    } catch (error) {
      console.log(error);
    }
  }
  const idUser = userLogged();

  const createTask = async (iduser, descrpt, stats) => {
      
    console.log(iduser, descrpt, stats);
    try {
      const data = JSON.parse(localStorage.getItem('name'));
      const result = await axios.post(`http://localhost:3001/tasks`, {
        idUser: iduser,
        description: descrpt,
        status: stats,
      },
      {
        headers:{ 'Authorization': data.token }
      },
      );

      const { idUser, description, status } = result.data;
      const newTask = { idUser, description, status };
      return newTask;

    } catch (error) {
      return error;
    }
  }

  const returnAllTasks = () => {
    const data = JSON.parse(localStorage.getItem('name'));
    const redirectToRegister = `/tasks/${data.id}`;
    console.log(data.id);
    navigate(redirectToRegister);
  }

  const clearAfterSubmit = () => {
    setInptDescpt('');
    ref.current.value = '';
  }

    return (
      <div className='tela-login-register'>
        {console.log(stat)}
        <div className='imagem2'></div>
        <form className='form-register2'>
          <h1 className='tituloSty'>Nova Tarefa</h1>
          <label htmlFor='description' className='label-user1'>
            Descrição
            <input
              name='description'
              type='text'
              id='description-label'
              ref={ref}
              onChange={ (e) => { setInptDescpt(e.target.value); } }
              className='form-control input-usr-name'
            />
          </label>
          <label htmlFor='password' className='label-user2'>
            Status
            {/*<input
              name='password'
              type='password'
              id='password'
              onChange={ (e) => { setStat(e.target.value); } }
              className='form-control input-usr-passwd'
    />*/}   
            <select
              onChange={ ({ target }) =>  setStat(target.value) } 
              className="selectStyle"
            >
              <option value="Pendente">Pendente</option>
              <option value="Concluido">Concluído</option>
            </select>  
          </label>
          <button
            id='btn-register'
            type='button'
            disabled=''
            onClick={ () => {createTask(idUser,inptDescpt, stat); clearAfterSubmit() }}
            className='notHaveAccount2'
          >
            Cadastrar
          </button>

          <button
            id='btn-cancel'
            type='button'
            disabled=''
            onClick={ () => returnAllTasks() () }
            className='notHaveAccount3'
          >
            Cancelar
          </button> 
        </form>
      </div>
    );
}