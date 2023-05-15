import React, { useContext, useState } from 'react';
import { useNavigate } from'react-router-dom';
import todolistContext from '../context/to-do-list-Context';
/*import todolistContext from '../context/to-do-list-Context';*/
import axios from 'axios';
import moment from 'moment';
import '../style/allTasks.css';
import '../fonts/TwinMarker.ttf';
import { BiEdit } from 'react-icons/bi';
import { BsPlusLg } from "react-icons/bs";
import { GoPencil } from "react-icons/go";
import { MdDeleteForever } from "react-icons/md";
import { ImExit } from "react-icons/im"

export default function Tasks() {
  // const navigate = useNavigate();
  // const { idUser, setIdUser } = useContext(todolistContext); 
  const [allTasks, setAllTasks] = useState([]);
  const [logout] = useState(false);
  const { setIdUser } = useContext(todolistContext);
  const navigate = useNavigate();
  
  // console.log(idUser);
    const tasksByUser = async () => {
        try {
          
          const data_tkn = JSON.parse(localStorage.getItem('name'));
          // console.log('data_tkn : ', data_tkn);
          if(data_tkn === null) navigate('/login');
          const resultado = await axios.get(`http://localhost:3001/tasks/${data_tkn.id}`, {
            headers:{ 'Authorization': data_tkn.token }
          });
          
           setAllTasks(resultado.data);
                     
        } catch (error) {
            console.log(error);  
        }
    }
    if (!(logout === true)) tasksByUser();
    else {
      localStorage.clear();
    const redirectToLogin = '/login';
    navigate(redirectToLogin);
    }  
    const deleteTask = async (idTask) => {
      try {
        const data = JSON.parse(localStorage.getItem('name'));
        await axios.delete(`http://localhost:3001/tasks/${idTask}`, {
          headers:{ 'Authorization': data.token }
        },
        
        );
      } catch (error) {
        console.log(error); 
      }
    }
       
    const userLogged = () => {
      try {

        const data_usr = JSON.parse(localStorage.getItem('name'));
        return data_usr.name;
      } catch (error) {
        console.log(error);
      }
    }
    const name = userLogged();
   
    const addNewTask = () => {
      const redirectToRegister = '/tasks';
      navigate(redirectToRegister);
  }

  const editTask = (idTask) => {
    const redirectToRegister = `/tasks/onetask/${idTask}`;
    navigate(redirectToRegister);
  }

  const goToLogoutPage = () => {
    setIdUser(null);
    localStorage.clear();
    const redirectToLogin = '/logout';
    navigate(redirectToLogin)

  }


  /* <Link to='/logout'><ImExit className='align-btn-exit' onClick={() => addNewTask() }/></Link>  */
   
    return (
      <div className='tasks-container color-background'>
        <div className='title-allTasks2 font-face'>To Do List {name} <GoPencil className='img-pencil' />
        <ImExit className='align-btn-exit' onClick={() => goToLogoutPage() }/>
        <div className='align-btn-exit' id='passar_mouse'></div>
        </div>
        
        <div className='tasks-div-father'>
          {/*<div className='title-allTasks font-face'>To Do List</div>*/}
          <table className='table-allTasks table table-hover table-borderless table-style'>
            <thead className='td'>
              <tr>
                <th className='td'>Tarefa</th>
                <th>Descrição</th>
                <th>Status</th>
                <th>Data</th>
                <th>Editar</th>
                <th>Deletar</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              
              {allTasks.map((e, index) => (
                <tr>
                  <td className='td'> {Number(index +1)}</td>
                  <td> {e.description}</td>
                  <td> {e.status}</td>
                  <td> {moment(e.createdAt).locale('pt-br').format('DD/MM/YYYY')}</td>
                  <td><BiEdit size={'1em'} onClick={ () => editTask(e.id) }/></td>
                  <td>< MdDeleteForever size={'1em'} onClick={ () => deleteTask(e.id) }/></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>  
              ))}
            </tbody>
          </table>
          
        </div>
          <div>
            <button
            onClick={ () => addNewTask() } 
            className='btn-add-task'><BsPlusLg className='img-plus'/> Nova Tarefa</button>
          </div> 
      </div>
    );
}