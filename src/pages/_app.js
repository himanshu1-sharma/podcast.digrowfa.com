import React, { createContext, useState, useEffect } from 'react';
import '@/styles/globals.css'
import '@/styles/theme.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Switch from "react-switch";


export const ThemeContext = createContext(null)

export default function App({ Component, pageProps }) {

  const [theme, setTheme] = useState()

  useEffect(() => {
    setTheme(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
  }, [])

  const toggleTheme = () => {
    setTheme((curElt) => (curElt === "light" ? "dark" : "light"))
    localStorage.setItem('theme', theme === "light" ? "dark" : "light")
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className='themeColor' id={theme}>
          <Component {...pageProps} />
          <div className='themeSwitch'>
            <label htmlFor="material-switch">
              <Switch
                checked={theme === "dark"}
                onChange={toggleTheme}
                handleDiameter={45}
                uncheckedIcon={false}
                checkedIcon={false}
                height={40}
                width={80}
                className="react-switch"
                id="material-switch"
              />
            </label>
          </div>
        </div>
      </ThemeContext.Provider>
    </>
  )
}
