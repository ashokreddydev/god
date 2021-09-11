import { Grid } from '@material-ui/core';
import React from 'react';
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