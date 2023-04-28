import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from "./layout/Layout.jsx";
import AppRouter from './routes/Router';

function App() {
  return (
    <>
    <BrowserRouter>
      <Layout>
        <AppRouter/>
      </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
