import { useContext, useEffect } from 'react';
import { LayoutContext } from './contexts/LayoutContext';

import AppLayout from './layout/AppLayout';
import ScrollBlocker from './layout/ScrollBlocker';

function App() {
  const { layoutState, dispatch } = useContext(LayoutContext);

  function handleResize() {
    dispatch({ type: 'set/viewportWidth', payload: window.innerWidth });
    switch(true) {
      case layoutState.modal && window.innerWidth <= 600:
        dispatch({ type: 'resize/modal', payload: {width: 'small', height: 'small'} });
        break;
      case layoutState.modal && layoutState.modalClass === 'flight-preview' && window.innerWidth > 1000:
        dispatch({ type: 'resize/modal', payload: {width: 'large', height: 'regular'} });
        break;
      case layoutState.modal && layoutState.modalClass === 'flight-preview' && window.innerWidth <= 1000:
        dispatch({ type: 'resize/modal', payload: {width: 'medium', height: 'regular'} });
        break;
      default:
        dispatch({ type: 'resize/modal', payload: {width: 'regular', height: 'regular'} });
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })

  function handleScroll() {
    dispatch({ type: 'set/scrollHeight', payload: window.scrollY });
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <>
      <ScrollBlocker />
      <AppLayout />
    </>
  )
}

export default App;
