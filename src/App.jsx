import React from 'react'
import './App.css'
import NoAsync from './theory/asynchronous/NoAsync'
import AsyncTask from './theory/asynchronous/AsyncTask'
import AsyncTimer from './theory/asynchronous/AsyncTimer'
import AsyncWorker from './theory/asynchronous/AsyncWorker'

function App() {

  return (
    <React.Fragment>
     APPLICATION
     <hr />
     {/* <NoAsync/> */}
     {/* <AsyncTask></AsyncTask> */}
     {/* <AsyncTimer></AsyncTimer> */}
     <AsyncWorker></AsyncWorker>
    </React.Fragment>
  )
}

export default App
