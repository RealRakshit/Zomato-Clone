import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import Navbar from './Components/navbar';
import Addrestraunt from './Components/addrestraunt';
import Login from './Components/login';
import Signup from './Components/signup';
import Search from './Components/search';

function App() {
  return (
  <div>
    <img src="https://images.freekaamaal.com/post_images/1606817930.jpg" alt="main" id="cover-pic" />
    <div id='navbar'>
      <Navbar />
      
      <div id="zoma">
          <p id="zom">zomato</p>
      </div>
      <div id="descr">
          <p id="desc">Find the best restaurants, cafés and bars in India</p>
      </div>
      <div id="descri">
          <p id="descrip">Popular locations in INDIA</p>
      </div>
      <div id="trashbox">
          <p id="trash">From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
      </div>
    </div>

      <Routes>
        <Route path='/add-restraunt' element={<Addrestraunt/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
      </Routes>

      <Search/>

  </div>
    
  );
}

export default App;
