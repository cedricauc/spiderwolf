import React from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';
import Home from './pages/Home/Index.jsx';
import Games from './pages/Games/Index.jsx'
import Details from './pages/Details/Index.jsx'
import Account from './pages/Account/Index';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import { Container, Grid } from '@mui/material';

const App = () => {

    const Layout = () => {
        return(
            <Container>
                <Grid>
                    <Header />
                    <Outlet />
                    <Footer />
                </Grid>
            </Container>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />}/>
                <Route path="/account" element={<Account />}/>
                <Route path="/games" element={<Games />} />
                <Route path="/games/:id" element={<Details />} />
                <Route path="*" element={<div>404 error</div>} />
            </Route>
        </Routes>
    )
}

export default App