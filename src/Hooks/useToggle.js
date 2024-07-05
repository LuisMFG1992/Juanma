import { useState } from 'react'

const useToggle = () => {
  const [state, setState] = useState(false)

  const toggleState = () => setState((prev) => !prev)

  return { state, toggleState }
}

export default useToggle
