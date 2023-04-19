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
    const [imgIds, setImgIds] = useState([]);
    const data = {
        gkey: "AIzaSyDCR6dWExzaR7sGBmWCrYoQohI2SJnhLIw",
        options: {
            style: {
            },
            onClick: {
                modal: true,
                newWindow: false
            },
            exclude: {
                "1.jpg": true
            },
            attachClass: {
                "2.jpg": "test"
            },
            attachId: {
                "2.jpg": "test2"
            },
            hover: true
        },
        dirId: "1p8X-2uyAH41KsNFSiEm847w5dQ"

    }
    const GOOGLE_API_KEY = data.gkey;
    const GOOGLE_DRIVE_URL_START =
        "https://www.googleapis.com/drive/v2/files?q=%27";
    const GOOGLE_DRIVE_URL_END = "%27+in+parents&key=";
    const GOOGLE_DRIVE_IMG_URL = "http://drive.google.com/uc?export=view&id=";
    const options = data.options;
    const header = data.header;
    useEffect(() => {
        loadData();
    }, []);
    function checkFormat(url) {
        return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
      }

    async function loadData() {
        await fetch(
            GOOGLE_DRIVE_URL_START +
            data.dirId +
            GOOGLE_DRIVE_URL_END +
            GOOGLE_API_KEY
        )
            .then(response => response.json())
            .then(jsonResp => {
               const img = jsonResp.items.filter((item=>{
                    return checkFormat(item.title)
                }))
                setImgIds(img);
            });
    }


    return (
        <div className={classes.root}>
            <Grid container >
                {imgIds && imgIds.map((item, index) =>
                    <Grid item xs={6} md={3} className="imageGridItem" key={item.id}>
                        <Box className="imagebox">
                            <img src={GOOGLE_DRIVE_IMG_URL + item.id} alt={item.title} className="image-fluid" />
                        </Box>
                    </Grid>
                )}
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
