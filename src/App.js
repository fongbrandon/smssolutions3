import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from 'react';
import Card from './components/Card/card.component';
import Details from './components/Details/details.component'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/home.component';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
function App() {
  {/*<Router>
    <div>
      <Routes>{
        <>
        <Route path={`/home`} element={<Home />} />
        <Route path={`/detail`} element={<Details />} />
        </>
      }
      </Routes>
    </div>
    </Router>*/}
   return (
     <>
      <Home/>
     </>
   )
}
export default App;