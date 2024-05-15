import React, { useContext } from 'react'
import './App.css'
import InetHeader from './components/InetHeader/InetHeader'
import PageUsers from './pages/PageUsers/PageUsers.lazy'
import { ApiUsers } from './contexts/api-users.context'


function App() {

  console.log(useContext(ApiUsers))

  return (
    <React.Fragment> 

      <InetHeader></InetHeader>
    
      <PageUsers></PageUsers>

    </React.Fragment>
  )
}

export default App
