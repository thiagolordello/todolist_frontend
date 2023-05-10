import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FormTask from "./pages/FormTask";

test('Verifiva se existem os elementos da pagina de cadastro da nova tarefa', async() => {
    render(
        <BrowserRouter>
            <FormTask />
        </BrowserRouter>
    );

    const txtTitulo = screen.getByTestId('tittlepage-testid');
    expect(txtTitulo).toBeInTheDocument('Nova Tarefa');

    const txtDescrip = screen.getByTestId('descricao-testid');
    expect(txtDescrip).toBeInTheDocument('Descrição');

    const txtInpDescrip = screen.getByTestId('input-descript-testid');
    expect(txtInpDescrip).toBeInTheDocument();

    const txtStatus = screen.getByTestId('status-testid');
    expect(txtStatus).toBeInTheDocument('Status');

    const txtSelctStatus = screen.getByTestId('select-testid');
    expect(txtSelctStatus).toBeInTheDocument();

    const txtBtnCadast = screen.getByTestId('btn-cadastrar-testid');
    expect(txtBtnCadast).toBeInTheDocument('Cadastrar');

    const txtBtnCancel = screen.getByTestId('btn-cancel-testid');
    expect(txtBtnCancel).toBeInTheDocument('Cancelar');

});