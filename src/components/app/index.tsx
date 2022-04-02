import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import pageHome from '../../pages/home/index'

export const App = () => {
  return (
    <Router basename="/">
      <main>
        <Routes>
          <Route path={`${pageHome.Route}`} element={<pageHome.Page />}/>
        </Routes>
      </main>
    </Router>
  )
};

export default {
  App,
}