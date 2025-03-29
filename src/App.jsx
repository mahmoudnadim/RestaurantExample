import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import { Home,Menu, MenuItem } from './Pages';

export default function App() {
  return (
    <>
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/menu/:id' element={<MenuItem />}/>
        </Routes>
      </Router>
    </>
  )
}
