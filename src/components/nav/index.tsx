import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import pageHome from '../../pages/home'
import pageStory from '../../pages/story'

const createLinks = () => {
  const pages = [pageHome, pageStory]

  return pages.map((page, index) => {
    return (
      <li>
        <Link key={index} to={`${page.Route}`} className={styles.navItem}>{page.Name}</Link>
      </li>
    )
  })
}

export const Nav = () => {
  const links = createLinks()

  return (
    <nav className={styles.nav}>
      <ul>{links}</ul>
    </nav>
  )
}

export default {
  Nav
}