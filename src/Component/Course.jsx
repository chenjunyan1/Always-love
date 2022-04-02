// 历程 时光
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Date from '../data.json'

function Course({ time, title, content }) {
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                {time}
                {/* 2021.09.15 */}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                    {/* <FastfoodIcon /> */}
                    <FavoriteIcon color="error"/>
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    {title}
                    {/* Eat */}
                </Typography>
                <Typography>
                    {content}
                    {/* Because you need strength */}
                </Typography>
            </TimelineContent>
        </TimelineItem>
    )
}

// {
//     "time": "",
//     "title": "",
//     "content": ""
// }

function Main() {
    return (
        <Timeline position="alternate">
            <Course
                time={Date.shiGuang[0].time}
                title={Date.shiGuang[0].title}
                content={Date.shiGuang[0].content}
            />
        </Timeline>
    );
}


export default Main;