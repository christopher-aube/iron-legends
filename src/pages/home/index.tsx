import React from 'react'
import styles from './styles.module.scss'

export const Route = '/'
export const Name = 'Intro'

export const Page = () => {
  return (
    <div className={styles.container}>
      <h1>Stay Awhile and Listen!</h1>
    </div>
  )
}

export default {
  Route,
  Name,
  Page,
}
