import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import HeroPane from "./components/HeroPane";

function App() {
  return (
    <div className="app">
      <Header />
      <HeroPane />
      {/* JSX */}
    </div>
  );
}

export default App;