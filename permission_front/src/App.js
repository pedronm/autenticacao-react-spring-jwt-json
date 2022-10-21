import Header from './components/Header'
import FormArtigo from './components/FormArtigo'
import Home from './components/Home'
import Login from './components/Login'
//or import './App.css
import styles from './main-style.module.css'
import React from 'react'
import {
  Routes,
  Route
} from "react-router-dom";

/** Route em sí é um lemento de rotas e não recebe outros elementos, logo os
 * redirecionamentos são passados pelo 'element', até que eu encontre algum exemplo difrente na internet.
 */
function App() {  
  return (
    <>
      <Header className={styles.header}/>
      <div className={styles.corpo_paginas}>       
        <Routes>          
          <Route path="*" element={<div>ROTA NÃO ENCONTRADA</div>}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
        </Routes>       
      </div>
    </>
  );
}

export default App;


/**
Only Route components can be a child of Routes. If you follow the v6 docs then you'll see the authentication pattern is to use a wrapper component to handle the authentication check and redirect.

    function RequireAuth({ children }: { children: JSX.Element }) {
      let auth = useAuth();
      let location = useLocation();

      if (!auth.user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} />;
      }

      return children;
    }

    ...

    <Route
      path="/protected"
      element={
        <RequireAuth>
          <ProtectedPage />
        </RequireAuth>
      }
    />

The old v5 pattern of create custom Route components no longer works. An updated v6 pattern using your code/logic could look as follows:

const PrivateRoute = ({ children }) => {
  const authed = isauth() // isauth() returns true or false based on localStorage
  
  return authed ? children : <Navigate to="/Home" />;
}

And to use

<Route
  path="/dashboard"
  element={
    <PrivateRoute>
      <Dashboard />
    </PrivateRoute>
  }
/>

*/