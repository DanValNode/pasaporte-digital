import React, { useState, useEffect, Fragment } from 'react';
import userModel from '../../../domain/models/userModel';
import {userService} from '../../../domain/services/userService';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';
import {Alert, AlertTitle } from '@material-ui/lab';
import {Box} from "@material-ui/core";

const ListUsersScreen = () => {

    const [usersEffect, setUsersEffect] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [error, setError] = useState('');
    const userConfigs = new userModel({});

    // data para demo ya que servicio usuarios esta fallando
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 6,
    });

    useEffect(() => {
        if(!loaded){
            userService.getAllUsers(() => alert("error")).then( data => {
                setUsersEffect(data);
                setLoaded(true);
                setError("Ocurrio un problema cargando los usuarios");
            });
        }
    },[loaded]);

    return(
        <Fragment>
            {
                error !== '' &&
                <Alert severity="error" onClose={() => {setError('')}}>
                    <AlertTitle>Error</AlertTitle>
                    {error} — <strong>Por favor intenta más tarde!</strong>
                </Alert>
            }

            <Box mt={3} />
            <DataGrid
                marginTop={3}
                {...data}
                filterModel={userConfigs.filterModel}
                showToolbar
                components={{
                    Toolbar: GridToolbar,
                }}
            />
        </Fragment>
    )
}

export default ListUsersScreen;