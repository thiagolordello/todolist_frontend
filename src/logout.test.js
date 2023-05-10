import { render,screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Logout from './pages/Logout'

test('Verifica os elementos da pagina "Logoout"', async() => {
    render(
        <BrowserRouter>
          <Logout />
        </BrowserRouter>
    );

    const txtTitulo = screen.getByTestId('titulo-datatesid');
    expect(txtTitulo).toHaveTextContent('Logout efetuado com sucesso!');
    
    const txtSubTit = screen.getByTestId('subtitle-testid');
    expect(txtSubTit).toHaveTextContent('Retornar a pagina de login.');

    const btnLogin = screen.getByTestId('btn-loigin-testid');
    expect(btnLogin).toHaveTextContent('Login');
});