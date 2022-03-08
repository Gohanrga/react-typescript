import { useState } from 'react'
import {Navigations} from './routes/Navigations'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigations></Navigations>
    </>
  )
}

export default App
