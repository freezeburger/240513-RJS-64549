import React from 'react'
import './App.css'
import InetHeader from './components/InetHeader/InetHeader'
import PageUsers from './pages/PageUsers/PageUsers.lazy'


function App() {

  return (
    <React.Fragment> 

      <InetHeader></InetHeader>

      <PageUsers></PageUsers>

    </React.Fragment>
  )
}

export default App
