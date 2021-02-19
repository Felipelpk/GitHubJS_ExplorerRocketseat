import React from 'react';
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => (
  <>
  <BrowserRouter>
  <Routes />
  </BrowserRouter>
  <ToastContainer 
  position='top-right' autoClose={3000} 
  hideProgressBar={false} newestOnTop={false} 
  closeOnClick rtl={false} draggable pauseOnHover /> 
  <GlobalStyle />
  </>
)

export default App;
