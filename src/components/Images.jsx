import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import { Box, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    // imageList: {
    //     width: "100%",
    //     height: 450,
    // },

}));



function Images() {
    const classes = useStyles();
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch('/api/images-list') //
        .then(res => res.json())
        .then(data => setImages(data))
        .catch(err => console.error('Failed to fetch images:', err));
    }, []);

    return (
        <div className={classes.root}>
            <Grid container >
            {images.map((url, index) => (
                    <Grid item xs={6} md={3} className="imageGridItem" key={url}>
                        <Box className="imagebox">
                            <img src={url} alt={url} className="image-fluid" />
                        </Box>
                    </Grid>
                 ))}
            </Grid>
            {/* <Grid container >
                {itemData && itemData.map((item, index) =>
                    <Grid item xs={6} md={3} className="imageGridItem" key={index}>
                        <Box className="imagebox">
                            <img src={item.img} alt={item.title} className="image-fluid" />
                        </Box>
                    </Grid>
                )}
            </Grid> */}
        </div>
    );
}

export default Images;
