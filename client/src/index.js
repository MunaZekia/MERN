import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import {ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri:"http://localhost:3001/graphql",
  cache: new InMemoryCache()
})

ReactDOM.render(
    <ApolloProvider client = {client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
