import React from 'react'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import styles from './styles.module.scss'
import { Nav } from '../nav'
import pageHome from '../../pages/home'
import pageStory from '../../pages/story'

const basename = '/'

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
      <div className={styles.gridContainer}>
        <div className={styles.gridRow}>
          <div className={[
              styles.gridColXs2,
              styles.gridColXsOffset1
            ].join(' ')}>
            <aside className={styles.pane}>
              <Nav />
            </aside>
          </div>
          <div className={styles.gridColXs6}>
            <main className={styles.main}>
              <Routes>
                <Route path={`${pageStory.Route}`} element={<pageStory.Page />}/>
                <Route path={`${pageHome.Route}`} element={<pageHome.Page />}/>
                <Route path="*" element={<Navigate to={basename} />}/>
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  )
}

export const getApp = () => {
  const pathname = window.location.pathname
  const isReRouted = pathname !== basename
  
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