import React from 'react'
import Container from '@material-ui/core/Container'
import { Box, Typography } from '@material-ui/core';



function Header() {
    return (
        <Box className="header" display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Typography variant="h4" className="text-white headertext">
                Sri Venkateswara
            </Typography>
        </Box>
    )
}

export default Header;
