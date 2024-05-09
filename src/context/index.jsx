import { createContext, useState } from 'react'

export const ThemeContext = createContext(null)

const MyContextProvider = ({ children }) => {
  const [isNavbarToggled, SetIsNavbarToggled] = useState(false)

  const toggleState = (setFunction) => {
    setFunction((prev) => !prev)
  }

  return (
    <ThemeContext.Provider
      value={{ isNavbarToggled, SetIsNavbarToggled, toggleState }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { MyContextProvider }
