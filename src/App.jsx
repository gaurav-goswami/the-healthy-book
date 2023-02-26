import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Error from './pages/Error';
import GetStarted from './pages/GetStarted';
import Navbar from './components/Header/Navbar';
import CategoryPage from './pages/CategoryPage';
import CountryCategoryPage from './pages/CountryCategoryPage';
import SearchResult from './pages/SearchResult';
import FullMeal from './pages/FullMeal';

const App = () => {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = '/'  element = {<Home />} />
          <Route path = '/getstarted' element = {<GetStarted />} /> 
          <Route path = '/explore' element = {<Explore />} /> 
          <Route path ='/category/:name' element = {<CategoryPage />} />
          <Route path = '/country-category/:name' element = {<CountryCategoryPage />} />
          <Route path = '/search/:name' element = {<SearchResult />}  />
          <Route path = '/meal/:name' element = {<FullMeal />} />
          <Route path = '*' element = {<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App