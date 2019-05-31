import React from 'react'

import { ApolloProvider } from 'react-apollo-hooks'
import apolloclient from './apolloclient'

import UploadBuddy from './UploadBuddy'

import './css/App.css'
import './css/normalize.css'

function App() {
  return (
    <ApolloProvider client={apolloclient}>
      <UploadBuddy />
    </ApolloProvider>
  )
}

export default App;
