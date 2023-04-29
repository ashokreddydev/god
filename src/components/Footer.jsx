import React from "react";
import { Box, Container, Grid, Typography } from "@material-ui/core";

export const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "secondary.main",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                    <Grid item xs={12}>
                        <Typography color="black" variant="h5">
                            KALIKA MATHA
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography color="textSecondary" variant="subtitle1">
                            KALIKA MATHA TEMPLE IN GANAPATHI NAGARAM,
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle1">
                            Temple Annaluru,Mydukur,
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle1">
                            Cuddapah - 516172
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle1">
                            Phone : 9618350808
                        </Typography>
                        <Typography color="textSecondary" variant="subtitle1">
                            Mail-ID : kalikamatha1@gmail.com
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;