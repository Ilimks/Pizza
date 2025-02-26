import React, { useEffect, useState } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Layout from './Layout/Layout';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Basket from './Pages/Basket/Basket';
import Loader from './Loader/Loader';

const App = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);


    return (
        <>
            {loading ? (
                <Loader/>
            ) : (
            <Routes>
                <Route path='/' element={<Layout/>}>
                <Route path='' element={<Home/>}/>    
                <Route path='about us' element={<AboutUs/>}/>    
                <Route path='contact' element={<Contact/>}/>    
                <Route path='basket' element={<Basket/>}/>   
                
                 
                </Route>
            </Routes>
            )}
        </>
    );
};

export default App;