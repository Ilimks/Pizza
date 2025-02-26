import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Layout from './Layout/Layout';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Basket from './Pages/Basket/Basket';
import Action from './Pages/Action/Action';
import Pizza from './Pages/Pizza/Pizza';


const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>    
                <Route path='about us' element={<AboutUs/>}/>    
                <Route path='contact' element={<Contact/>}/>    
                <Route path='basket' element={<Basket/>}/>   
                <Route path='action' element={<Action/>}/>
                <Route path='pizza' element={<Pizza/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;