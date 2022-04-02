import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import pageHome from '../../pages/home/index'

const basename = '/iron-legends'

const NoRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={basename} />}/>
      </Routes>
    </Router>
  )
}

const AppRoutes = () => {
  return (
    <Router basename={basename}>
      <main>
        <Routes>
          <Route path={`${pageHome.Route}`} element={<pageHome.Page />}/>
          <Route path="*" element={<Navigate to={basename} />}/>
        </Routes>
      </main>
    </Router>
  )
}

export const App = () => {
  const pathname = window.location.pathname
  
  return (pathname === '/') ? <NoRoutes /> : <AppRoutes />
};

export default {
  App,
}