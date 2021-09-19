import React, { useState, useEffect, location } from 'react';
import './App.css';
import { BrowserRouter as Router, useHistory, Redirect } from 'react-router-dom';
import Header from './componente/Header'
import Content from './componente/Content';
import Login from './pages/Login';
import api from './services/api';
import Swal from 'sweetalert2'

function App() {
  //Estado
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState(0)
  const [ emailData, setEmailData ] = useState('')
  const [ passwordData, setPasswordData] = useState('')
  const [ isLogged, setIsLogged ] = useState(false)

  const handleEmail = (event) => {setEmail(event.target.value)}
  const handlePassword = (event) => {setPassword(event.target.value)}
 
  // Consumindo dados do json-server p/login
  const handleGetLogin = async () => {
    try {
        const response = await api.get('/login')
        const dataLogin = response.data
        
        setEmailData(dataLogin[0].email)
        setPasswordData(dataLogin[0].password)
        
    } catch (error) {
      Swal.fire({
          text: "Falha ao conectar!!!"
      })
    }
  }
   
  //* funcao para verificar dados p login
  function verifyLogin () {
   if((emailData == email) && (passwordData == password)){
        console.log("testou")
        setIsLogged(true)
    }
    else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Usuario ou senha invalidos',
        showConfirmButton: false,
        timer: 2000
      })
    }
  };

  useEffect(() => {
    handleGetLogin()
  }, [])

  return (
    <div className="App">
      <Router>
        { isLogged ? 
          <>
            <Redirect
              to={{
              pathname: "/message",
              state: { from: location }
              }}
        />
            <Header />
            <Content/>
          </>
          : <Login onVerify={ verifyLogin } 
                    onLoginEmail={ handleEmail } 
                    onLoginPassword={ handlePassword }/> }
      </Router>
    </div>
  );
}

export default App;
