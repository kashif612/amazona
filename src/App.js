import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../src/Screen/Navbar';
import Home from '../src/Screen/Home';
import Contact from "../src/Screen/Contact";
import Footer from '../src/Screen/Footer';
import About from "../src/Screen/About";
import Admission from "../src/Screen/Admission";
import Country from './Screen/Country';
import Apply from './Screen/Apply';



function App() {
  return (
    <>
<Navbar/>
    <Switch>

<Route exact path="/"  component={Home}/>
<Route exact path="/Apply"  component={Apply}/>

<Route exact path="/Admission"  component={Admission}/>

<Route exact path="/Contact"  component={Contact}/>

<Route exact path="/About"  component={About}/>
<Route exact path="/Country"  component={Country}/>





    </Switch>
    <Footer/>

    </>
  
  );
}

export default App;
