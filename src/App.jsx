import React from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';
import Home from './pages/Home/Index.jsx';
import Games from './pages/Games/Index.jsx'
import Details from './pages/Details/Index.jsx'
import Register from './pages/Register/Index';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

const App = () => {

    const Layout = () => {
        return(
            <>
                <Header />
                <Outlet />
                <Footer />
            </>
        )
    }

    return (
        <div className='app'>
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Home />}/>
                        <Route path="/register" element={<Register />}/>
                        <Route path="/games" element={<Games />} />
                        <Route path="/games/:id" element={<Details />} />
                        <Route path="*" element={<div>404 error</div>} />
                    </Route>
                </Routes>
            </div>
        </div>
    )
}

export default App