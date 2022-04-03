import React from 'react'
import { createRoot } from 'react-dom/client'
import { getApp } from './components/app'

const container = document.getElementById('app') as HTMLElement
const root = createRoot(container)

const reload = () => {
  setTimeout(() => {
    window.requestAnimationFrame(render)
  }, 0)
}

const render = () => {
  const app = getApp()

  root.render(<app.Routes />)

  if (app.isReRouted) {
    reload()
  }
}

render()
