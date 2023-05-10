import { render,screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Tasks from './pages/Tasks'

test('Verifica os elementos da pagina "Tasks"', async() => {
    render(
        <BrowserRouter>
            <Tasks />
        </BrowserRouter>
    );

   const txtTitulo = screen.getByTestId('titulo'); // verifica se parte do texto do titulo existe
   const texto = txtTitulo.textContent;
   expect(texto).toContain('To Do List');

   const colTarefa = screen.getByTestId('tarefa-testid');
   expect(colTarefa).toHaveTextContent('Tarefa');
   
   const colDescrip = screen.getByTestId('descricao-testid');
   expect(colDescrip).toHaveTextContent('Descrição');

   const colStatus = screen.getByTestId('status-testid');
   expect(colStatus).toHaveTextContent('Status');
   
   const colData = screen.getByTestId('data-tarefa-testid');
   expect.toHaveTextContent('Data');

   const colEdit = screen.getAllByTestId('editar-testid');
   expect.toHaveTextContent('Editar');

   const colDellet = screen.getAllByTestId('deletar-testid');
   expect.toHaveTextContent('Deletar');

   const textBtnAddTask = screen.getAllByTestId('btnaddtask-testid');
   expect.toHaveTextContent('Nova Tarefa');
});