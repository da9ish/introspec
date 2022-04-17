import React from 'react'
import Root from './layouts/Root'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import client from './client';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Root />
      </Router>
    </ApolloProvider>
  );
}

export default App;
