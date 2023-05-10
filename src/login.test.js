
import { getByTestId, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Login from "./pages/Login";

test('Verifica se existem os elementos da pagina "Login"', async() => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const txtLogin = screen.getByLabelText('Login'); // Titulo Login da pagina
    expect(txtLogin).toBeInTheDocument();
  
    const labelNome = screen.getByText('Nome'); // Pega texto 'Nome' antes do input de nome
    expect(labelNome).toBeInTheDocument();


    const inputNome =  screen.getByRole('textbox', {id:"name-input"}); // Pega o input de nome
    expect (inputNome).toBeInTheDocument();

    const txtLabelLogin = await screen.findByLabelText('Senha'); // Pega o texto 'Senha' antes do input de senha
    expect(txtLabelLogin).toBeInTheDocument();

    const inputPasswd = screen.getByRole('textbox', {password:/password/i}); // Pega o elemento input da senha (ele contem o seu type = password) 
    expect(inputPasswd).toBeInTheDocument();

    const btnLogin = screen.getByRole('button', { name: 'Login'  }); // Testa o texto no baotao Login
    expect(btnLogin).toBeInTheDocument();

    const btnCriarConta = screen.getByRole('button', { name: 'Clique aqui para criar conta.' }); // Testa o texto no botao 'Clique aqui para criar conta.'
    expect(btnCriarConta).toBeInTheDocument();  
});


  