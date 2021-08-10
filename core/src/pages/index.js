import React from "react"
import { Link } from 'gatsby'
import Text from 'shared/Text'

export default function Home(props) {
  return (
    <div>
      <h1>Homepage</h1>
      <Text>This is the home page</Text>
      <Link to={'http://localhost:8001/blog'}>blog</Link>
    </div>
  )
}