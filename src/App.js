import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { AppContext } from './context/contextApi'
import Header from "./components/Header";
import Feed from "./components/Feed";
import LeftNav from "./components/LeftNav";
import LeftNavMenuItems from "./components/LeftNavMenuItems";
import SeachResult from "./components/SearchResult";
import seachResultVideos from "./components/searchResultVideos";
import SuggestionVideo from "./components/SuggestionVideo";
import VideoDeatils from './components/VideoDeatils';




function App() {
  return (
    <AppContext>
      <BrowserRouter>
       <div className='flex flex-col h-full w-full'>
        <Header />
        <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/searchResult/:searchQuery' element={<SeachResult />} />
        <Route path='/video/:id' element={<VideoDeatils />} />
        </Routes>
       </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App