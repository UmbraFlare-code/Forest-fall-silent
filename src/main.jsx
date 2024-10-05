import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

import './styles/index.css';
import './styles/App.css';
import './styles/Caps.css';
import 'atropos/css/min'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <App />
  </StrictMode>,
)
