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

export function App(){
  return(
    <div className='App'>
      <>
      <Header/>
      <RouterProvider router={router} />
      </>
    </div>
  )
}