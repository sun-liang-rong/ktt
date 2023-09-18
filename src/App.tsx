import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router } from 'react-router-dom'
import RouterView from './router';
function App() {
  return (
    <Router><RouterView></RouterView></Router>
  );
}

export default App;
