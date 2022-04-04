import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import pageHome from '../../pages/home'
import pageStory from '../../pages/story'
import { Nav } from '../nav'

const basename = '/iron-legends'

const ReRoute = () => {
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
      <aside>
        <Nav />
      </aside>
      <main>
        <Routes>
          <Route path={`${pageStory.Route}`} element={<pageStory.Page />}/>
          <Route path={`${pageHome.Route}`} element={<pageHome.Page />}/>
          <Route path="*" element={<Navigate to={basename} />}/>
        </Routes>
      </main>
    </Router>
  )
}

export const getApp = () => {
  const pathname = window.location.pathname
  const isReRouted = pathname === '/'
  
  return {
    Routes: () => {
      return isReRouted ? <ReRoute /> : <AppRoutes />
    },
    isReRouted,
  }
};

export default {
  getApp,
}