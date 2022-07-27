import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export default function NavBar() {
    return(
        <>
            <AppBar position="relative">
                <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    UPayment Store
                </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}
