import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import pageHome from '../../pages/home'
import pageStory from '../../pages/story'

const createLinks = () => {
  const pages = [pageHome, pageStory]

  return pages.map((page, index) => {
    return <Link key={index} to={`${page.Route}`} className={styles.navItem}>{page.Name}</Link>
  })
}

export const Nav = () => {
  const links = createLinks()

  return (
    <nav className={styles.nav}>{links}</nav>
  )
}

export default {
  Nav
}