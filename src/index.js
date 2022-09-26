import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './stylesheet/_main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
