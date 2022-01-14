import { useRef } from 'react'

/* useRef hook allows for access to data such as form input without that data being associated with any piece of state */
function UseRefExample1() {
  const inputRef = useRef()
  const paraRef = useRef()


  /* inputRef.current is the DOM object.. inputRef.current.value is the value of that DOM object */
  const onSubmit = e => {
    e.preventDefault()
    console.log(inputRef.current.value)
    inputRef.current.value = 'Hello'
    inputRef.current.style.backgroundColor = 'red'
    paraRef.current.innerText = 'Goodbye'
  }

  return (
    <div className="container mt-5">
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" ref={inputRef} className="form-control mb-2" />
        <button className="btn btn-primary">
          Submit
        </button>
        <p onClick={() => inputRef.current.focus()} ref={paraRef}>Hello</p>
      </form>
    </div>
  )
}

export default UseRefExample1
