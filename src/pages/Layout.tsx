
import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import NavBar from '../components/navbar';

import { Container } from '@mui/system';
export default function Layout() {
    return(
        <>
        <NavBar />
        <Container sx={{ py: 8 }} maxWidth="md">
            
            
            
                <div>
                {/* <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="details">details</Link> |{" "}
                    <Link to="addproduct">addProduct</Link> |{" "}
                    <Link to="album">album</Link> |{" "}
                </nav>
                <br /> */}
                <Outlet />

                </div>
            </Container>
        </>
    )
}
