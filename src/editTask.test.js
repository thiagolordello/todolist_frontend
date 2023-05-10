import { render,screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import EditTask from './pages/EditTask'

test('Verifica os elementos na pagina edit task', async() => {
    render(
        <BrowserRouter>
          <EditTask />
        </BrowserRouter>
    );

    const textTitulo = screen.getByTestId('titulo-pagina-testid');
    expect(textTitulo).toHaveTextContent('Editar');
    
    const textDescp = screen.getByTestId('texto-descric-testid');
    expect(textDescp).toHaveTextContent('Descrição');

    const inputDesc = screen.getByTestId('input-desc-testid');
    expect(inputDesc).toBeInTheDocument();

    const textStatus = screen.getByTestId('text-staus-data-testid');
    expect(textStatus).toHaveTextContent('Status');

    const selectStatus = screen.getByTestId('select-status-datatestid');
    expect(selectStatus).toBeInTheDocument();

    const btnSalvar = screen.getByTestId('btnSalvar-data-testid');
    expect(btnSalvar).toHaveTextContent('Salvar');

    const btnCancel = screen.getByTestId('btnCancel-testid');
    expect(btnCancel).toHaveTextContent('Cancelar');
});