import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './components/about/AboutPage';
import HomePage from './components/home/HomePage';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Notes from './components/notes/Notes';
import Header from './components/navigation/Header';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div>
      {/* <Navigation/> */}
      <Header />
      <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route path='/notes' element={<Notes/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;