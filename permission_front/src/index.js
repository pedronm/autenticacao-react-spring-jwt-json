import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

/** É preciso que o Browser Router fique na parte mais alta ta árvore de componentes.
 *  A razão de isso aconecer é que, ele entrega um histórico de contexto que é necessário na hora que as rotas são criadas
 *  Para o useRouter(). Nota que declarar na parte mais alta signifca que não pode ficar no próprio App, mas pelo menos no 
 *  no componente que o renderiza.
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
