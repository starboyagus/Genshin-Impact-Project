import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import { createContext, useState } from 'react'
import './App.css'


import { Header, Principal, Tierlist, Error } from './Components/common';

const router = createBrowserRouter([{
  path: '/',
  element: <Principal />,
  errorElement: <Error />,
},
{
  path: '/tierlist',
  element: <Tierlist />,
}
]);
export const ThemeContext = createContext(null);

export function App() {
  const[theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className='App' id={theme}>
        <>
          <Header/>
          <RouterProvider router={router} />
        </>
      </div>
    </ThemeContext.Provider>
  )
  }