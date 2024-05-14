import React from 'react'
import './App.css'
import PageHome from './pages/PageHome/PageHome.lazy'
import InetHeader from './components/InetHeader/InetHeader'


function App() {

  const [ home, setHome ] = React.useState(false)

  return (
    <React.Fragment> 

      <InetHeader></InetHeader>

      <button onClick={() => setHome(true)}>Display Home</button>
      { home && <PageHome/> }

    </React.Fragment>
  )
}

export default App
