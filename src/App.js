import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client";
import Home from './Components/Home/Home';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box>
      <Navbar/>
      <Home/>
    </Box>
  );
}

export default App;
