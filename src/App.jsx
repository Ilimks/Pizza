import React, { useEffect, useState } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Layout from './Layout/Layout';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import Basket from './Pages/Basket/Basket';
// <<<<<<< HEAD
import Action from './Pages/Action/Action';
import Pizza from './Pages/Pizza/Pizza';
// ========
import Loader from './Loader/Loader';
// >>>>>>> 9a455c376b4d0578be0e398a7a45295e0f5f4f63

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
                <Route path='action' element={<Action/>}/>
                <Route path='pizza' element={<Pizza/>}/>
                </Route>
            </Routes>
            )}
        </>
    );
};

export default App;