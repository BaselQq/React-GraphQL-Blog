import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import Users from './Components/User/Users';
import { gql, useQuery } from '@apollo/client';
import RoleList from './Components/Roles/RoleList';

// const httpLink = new HttpLink({
//   uri:  // replace with your GraphQL endpoint
// });

const client = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql',
    cache: new InMemoryCache(),
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <Navbar/>
        <Routes>
          <Route path="/users" element={<Users/>}></Route>
          <Route path="/roles" element={<RoleList/>}></Route>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
      </ApolloProvider>
    </Router>
  );
}

export default App;
