import { Grid } from '@material-ui/core';
import React, {useState,useEffect} from 'react';
import ReactPlayer from 'react-player'


const videolist = [
    {
        title: "Vinayaka",
        sources: "https://www.youtube.com/watch?v=_nVaY5GLLog&ab_channel=CVS3DRhymes%26KidsSongs",
        description: ""
    },
    {
        title: "Big Buck Bunny",
        sources: "https://www.youtube.com/watch?v=gjklOFzBPT4&ab_channel=VolgaVideo",
        description: ""
    },
    {
        title: "Big Buck Bunny",
        sources: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
        description: ""
    },
    {
        title: "Big Buck Bunny",
        sources: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
        description: ""
    }

]

function Videos() {
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
        dirId: "1PwBk29d42EYa7xtwUKpXbBy-0j6koFkM"

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

    async function loadData() {
        await fetch(
            GOOGLE_DRIVE_URL_START +
            data.dirId +
            GOOGLE_DRIVE_URL_END +
            GOOGLE_API_KEY
        )
            .then(response => response.json())
            .then(jsonResp => {
                console.log("jsonResp:",jsonResp)
            //    const img = jsonResp.items.filter((item=>{
            //         return checkFormat(item.title)
            //     }))
            //     setImgIds(img);
            });
    }
    return (
        <div>
            <Grid container spacing={1}>
                {videolist && videolist.map((item, index) =>
                    <Grid item md={6} key={index}>
                        <ReactPlayer url={item.sources} controls={true} width={"100%"} className="videoplayer" />
                    </Grid>
                )}
            </Grid>


        </div>
    );
}


export default Videos;