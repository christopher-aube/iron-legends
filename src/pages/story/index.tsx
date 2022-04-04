import React from 'react'
import { Content } from './content'

export const Route = '/story'
export const Name = 'Story'

export const Page = () => {
  return (
    <div>
      <Content />
    </div>
  )
}

export default {
  Route,
  Name,
  Page,
}