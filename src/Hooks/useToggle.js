import { useState } from 'react'

const useToggle = () => {
  const [state, setState] = useState(false)

  const toggleState = (state) => {
    if (state === true || state === false) {
      setState(state)
    } else {
      setState((prev) => !prev)
    }
  }

  return { state, toggleState }
}

export default useToggle
