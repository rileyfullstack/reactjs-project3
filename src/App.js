import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from "./layout/Layout.jsx";
import AppRouter from './routes/Router';
import ThemeProviders from './providers/ThemeProviders';
import SnackbarProvider from './providers/SnackBarProvider';
import { UserProvider } from './users/providers/UserProvider';
import { MenuProvider } from './layout/header/rightNavBar/menu/MenuProvider';

function App() {

  return (
    <>
    <BrowserRouter>
      <UserProvider>
        <MenuProvider>
          <SnackbarProvider>
            <ThemeProviders>
              <Layout>
                  <AppRouter />
              </Layout>
            </ThemeProviders>
          </SnackbarProvider>
        </MenuProvider>
      </UserProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
