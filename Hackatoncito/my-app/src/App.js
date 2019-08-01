import React from 'react';
import Cover from './sections/components/Cover';
import NavBar from './sections/components/Nav-Bar';
import Footer from './sections/components/Footer';
import Lp from './sections/Lp';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Cover/>
      <Lp/>
      <Footer/>
    </div>
  );
}

export default App;
