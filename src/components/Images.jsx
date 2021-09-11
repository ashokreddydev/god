import React from 'react';
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


const itemData = [
    {
        img: "https://material-ui.com/static/images/image-list/honey.jpg",
        title: "Honey",
    },
    {
        img: "https://material-ui.com/static/images/image-list/camera.jpg",
        title: "Honey",
    },
    {
        img: "https://material-ui.com/static/images/image-list/vegetables.jpg",
        title: "Honey",
    },

    {
        img: "https://material-ui.com/static/images/image-list/camera.jpg",
        title: "Honey",
    },
    {
        img: "https://material-ui.com/static/images/image-list/honey.jpg",
        title: "Honey",
    },
    {
        img: "https://material-ui.com/static/images/image-list/honey.jpg",
        title: "Honey",
    },
    {
        img: "https://material-ui.com/static/images/image-list/vegetables.jpg",
        title: "Honey",
    },
    {
        img: "https://material-ui.com/static/images/image-list/honey.jpg",
        title: "Honey",
    },
    {
        img: "https://material-ui.com/static/images/image-list/vegetables.jpg",
        title: "Honey",
    },
    {
        img: "https://material-ui.com/static/images/image-list/honey.jpg",
        title: "Honey",
    },
    {
        img: "https://material-ui.com/static/images/image-list/vegetables.jpg",
        title: "Honey",
    },
    {
        img: "https://material-ui.com/static/images/image-list/honey.jpg",
        title: "Honey",
    },
    {
        img: "https://material-ui.com/static/images/image-list/camera.jpg",
        title: "Honey",
    },
    {
        img: "https://material-ui.com/static/images/image-list/vegetables.jpg",
        title: "Honey",
    },
    {
        img: "https://material-ui.com/static/images/image-list/honey.jpg",
        title: "Honey",
    },
]

function Images() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container >
                {itemData && itemData.map((item, index) =>
                    <Grid item xs={6} md={3} className="imageGridItem" key={index}>
                        <Box className="imagebox">
                            <img src={item.img} alt={item.title} className="image-fluid" />
                        </Box>
                    </Grid>
                )}
            </Grid>
        </div>
    );
}

export default Images;
