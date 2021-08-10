import React from "react"
import { Link } from 'gatsby'
import Text from 'shared/Text'

export default function Home(props) {
  return (
    <div>
      <h1>Hello, world</h1>
      <Text>This is the blog</Text>
      <Link to={'http://localhost:8002'}>Home</Link>
    </div>
  )
}