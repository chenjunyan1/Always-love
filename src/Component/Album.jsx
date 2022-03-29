// 相册
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Stack from '@mui/material/Stack';

import Date from '../data.json'

// CSS
const div1 = {
    marginBottom: "100px"
}

function Albums({ xiangCe }) {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up(500));

    return (
        <div theme={theme} style={div1}>
            <Stack spacing={2} direction="row">
                <Button
                    variant="contained"
                    fullWidth={true}
                    color="warning"
                    size="large"
                >
                    {xiangCe.title}
                </Button>
            </Stack>
            <Box sx={{ width: matches ? 1000 : 300, height: 450, overflowY: 'scroll' }}>
                <ImageList variant="masonry" cols={matches ? 3 : 2} gap={8}>
                    {xiangCe.gallery.map((item, index) => (
                        <ImageListItem key={index}>
                            <img
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar position="below" title={item.title} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div >
    )
}

function Album() {
    return (
        <div>
            <div>
                {Date.xiangCe.map((item, index) => {
                    return (
                        <Albums key={index} xiangCe={Date.xiangCe[index]} />
                    )
                })}
            </div>
        </div >
    )
}


export default Album;

// {
//     "title": "ll",
//     "gallery": [
//         {
//             "img": "",
//             "title": ""
//         }
//     ]
// },