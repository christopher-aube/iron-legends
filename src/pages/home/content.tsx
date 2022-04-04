import React from 'react'
import styles from './styles.module.scss'

export const Content = () => {

  return (
    <>
      <h1>Stay Awhile and Listen!</h1>
      <p>This is a chronicle of the adventures had from a roleplaying group during a campaign called <span className={styles.bold}>Iron Legends</span>.</p>
    </>
  )
}

export default {
  Content,
}