import { useState, useEffect } from 'react';

import Home from './pages/Home';

function App() {

  function handleScroll() {
    console.log(window.scrollY)
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <Home />
  )
}

export default App;
