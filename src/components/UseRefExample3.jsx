import { useState } from 'react'
import ToDo from './ToDo'

function UseRefExample3() {
  const [showToDo, setShowToDo] = useState(true)

  const toggleToDo = () => setShowToDo(!showToDo)

  return (
    <div>
      {showToDo && <ToDo />}
      <button className="btn btn-primary" onClick={toggleToDo}>Toggle ToDo</button>
    </div>
  )
}

export default UseRefExample3