import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { ApolloProvider } from '@apollo/client'

import Root from './layouts/Root'
import client from './client'

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Root />
      </Router>
    </ApolloProvider>
  )
}

export default App
