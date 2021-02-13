import React from 'react';
import './styles/cards.scss';
import Grid from '@material-ui/core/Grid';
import { FaHome, FaNewspaper } from "react-icons/fa";
import {Card,CardHeader,CardContent} from '@material-ui/core';

const HomeScreen = () => {
    
    return (
        <Grid container>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center">
                <FaHome className="icon-title"/>
                <h2 className="subtitle ml-1">Titulo</h2>
            </Grid>
            
            <Grid
                container
                direction="row"
                justify="flex-start"
                className="main-card"
                >
                <Card>
                    <CardHeader
                        avatar={<FaNewspaper/>}
                    />
                </Card>    
            </Grid>

        </Grid>
    )
}

export default HomeScreen;