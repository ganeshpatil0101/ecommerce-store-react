
import React from 'react';
import {Outlet} from 'react-router-dom';
import NavBar from '../components/navbar';

import { Container } from '@mui/system';
export default function Layout() {
    return(
        <>
        <NavBar />
        <Container sx={{ py: 8 }} maxWidth="md">
            <div>
            <Outlet />
            </div>
        </Container>
        </>
    )
}
