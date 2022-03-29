// 小记
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
// 本地json
import Date from '../data.json'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Cards({ title, content, img }) {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up(500));

    return (
        <Card theme={theme} sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={matches ? "180" : "100"}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant={matches ? "h5" : "h6"} component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

function Diary() {

    return (
        <div >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Date.xiaoJi.map((item, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            < Cards
                                key={index}
                                title={Date.xiaoJi[index].title}
                                content={Date.xiaoJi[index].content}
                                img={Date.xiaoJi[index].img}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    )
}

export default Diary;