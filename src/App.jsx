import { useState } from 'react'
import CakeView from './features/cake/cakeView'
import IcecreamView from './features/icecream/icecreamView'
import ViewUser from './features/user/viewUser'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CakeView/>
      <IcecreamView/>
      <ViewUser/>
    </div>
  )
}

export default App
