import { render,screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Register from './pages/Register'

test('Verifica os elementos na pagina "register"',async() => {
   render(
    <BrowserRouter>
       <Register />
    </BrowserRouter>
   );
   
   const textTitle = screen.getByTestId('title-page-testid');
   expect(textTitle).toHaveTextContent('Crie sua conta')

   const textUser = screen.getByTestId('txt-user-testid');
   expect(textUser).toHaveTextContent('Usuário');

   const inputUser = screen.getByTestId('inpt-user-testid');
   expect(inputUser).toBeInTheDocument();

   const textPasswd = screen.getByTestId('passwd-testid');
   expect(textPasswd).toHaveTextContent('Senha');

   const inputPasswd = screen.getByTestId('inpt-passwd-testid');
   expect(inputPasswd).toBeInTheDocument();

   const btnSave = screen.getByTestId('btn-Cad-testid');
   expect(btnSave).toHaveTextContent('Cadastrar');

   const btnCancel = screen.getByTestId('btn-cancel-testid');
   expect(btnCancel).toHaveTextContent('Cancelar')

});