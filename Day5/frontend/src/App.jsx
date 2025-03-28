import React from 'react'
import Register from './components/Register';
import View from './components/View';

const App = () => {
  return (
    <div>
      <h1>User Registration System</h1>
      
      <Register/>

      <h1>Current users</h1>
      <View/>
    </div>
  )
}

export default App