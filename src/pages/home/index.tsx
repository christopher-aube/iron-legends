import React from 'react'
import styles from './styles.module.scss'

export const Route = '/'

export const Page = () => {
  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
    </div>
  )
}

export default {
  Route,
  Page,
}
