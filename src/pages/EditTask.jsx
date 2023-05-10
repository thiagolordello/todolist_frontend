import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../style/edit_task.css';
export default function EditTask() {
  const [inptDescpt,setInptDescpt] = useState('');

  
  const [stat, setStat] = useState('');
  const navigate = useNavigate();
  const params = useParams();
  const ref = useRef(null);

  useEffect(() => {
    getOneTaskById();
  }, [getOneTaskById]);
  const getOneTaskById = async () => {
    try {
      const data = JSON.parse(localStorage.getItem('name'));
      const result = await axios.get(`http://localhost:3001/tasks/onetask/${params.id}`, {
        headers: { 'Authorization': data.token }
      },

    );
    
    setStat(`${result.data.status}`);
    setInptDescpt(`${result.data.description}`);
    
    } catch (error) {
      console.log(error);
    }
  
}

  const updateTask = async (idTask, descrpt, stats) => {
    
    try {
      const data = JSON.parse(localStorage.getItem('name'));
      const result = await axios.put(`http://localhost:3001/tasks/${idTask}`, {
        id: idTask,
        description: descrpt,
        status: stats,
      },
      {
        headers:{ 'Authorization': data.token }
      },
      );
      
      return result;

    } catch (error) {
      return error;
    }
  }

  const returnAllTasks = () => {
    const data = JSON.parse(localStorage.getItem('name'));
    const redirectToRegister = `/tasks/${data.id}`;
    navigate(redirectToRegister);
  }

  const clearAfterSubmit = () => {
    setInptDescpt('');
    ref.current.value = '';
  }
  
  

    return (
      <div className='tela-update-task'>
        <div className='imagemFake'></div>
        <form className='form-register2'>
          <h1>Editar Tarefa</h1>
          <label htmlFor='description' className='label-user1'>
            Descrição
            <input
              name='description'
              type='text'
              id='description-label'
              ref={ref}
              value={inptDescpt}
              onChange={ (e) => { setInptDescpt(e.target.value); } }
              className='form-control input-usr-name3'
            />
          </label>
          <label htmlFor='password' className='form-label label-status'>
            Status
              <select
              onChange={ ({ target }) =>  setStat(target.value) } 
              className="input-usr-name2 "
              value={stat}
            >
              <option value="Pendente">Pendente</option>
              <option value="Concluido">Concluído</option>
            </select>  
          </label>
          <button
            id='btn-register'
            type='button'
            disabled=''
            onClick={ () => {updateTask(params.id, inptDescpt, stat); clearAfterSubmit(); returnAllTasks(); }}
            className='notHaveAccount2'
          >
            Salvar
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