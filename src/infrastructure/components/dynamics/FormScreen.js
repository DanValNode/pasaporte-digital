import React, {Fragment, useState} from 'react';
import {
    Button, Grid, InputLabel, TextField, FormHelperText,
    FormControlLabel, Checkbox, MenuItem, Box
} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const typeText = [
    'text',
    'email',
    'number',
    'password'
]


function FormScreen(props) {
    const classes = useStyles();
    let jsonState = {};
    props.entity.forEach( elem => {
        if(typeText.indexOf(elem.type) >= 0)
            jsonState[elem.name] = '';
        else if(elem.type === 'checkbox')
            jsonState[elem.name] = false;
    });
    const [state, setState] = useState( jsonState );
    const handleChange = (event) => {
        let currentState = {...state};
        if(typeText.indexOf(event.target.type) >= 0)
            currentState[event.target.name] = event.target.value;

        setState(currentState);
    }

    return (
        <form className={classes.root}>
            <Grid container spacing={2}>
                {
                    props.entity.map((element, index) => (
                        <Grid key={index} item xs={12} md={6} lg={3}>
                            {
                                typeText.indexOf(element.type) >= 0 &&
                                <Fragment>
                                    <InputLabel htmlFor={element.name + index}>{element.name}</InputLabel>
                                    <TextField fullWidth={true} type={element.type}
                                               value={state[element.name]}
                                               onChange={handleChange}
                                               required={element.required}
                                               name={element.name} id={element.name + index}
                                               aria-describedby={element.name + "helper-text" + index}/>
                                    <FormHelperText id={element.name + "helper-text" + index}>
                                        {element.info}
                                    </FormHelperText>
                                </Fragment>
                            }
                            {
                                element.type === 'checkbox' &&
                                <FormControlLabel
                                    control={<Checkbox name={element.name} value={state[element.name]}
                                                       onChange={handleChange}
                                                       required={element.required} />}
                                    label={element.info}
                                />
                            }
                            {
                                element.type === 'select' &&
                                <TextField
                                    id={element.name + index}
                                    select
                                    label="Seleccione ..."
                                    name={element.name}
                                    datatype={element.type}
                                    value={state[element.name]}
                                    onChange={handleChange}
                                    helperText="Please select your currency"
                                    required={element.required}
                                >
                                    {element.values.map((option) => (
                                        <MenuItem key={option.value} value={option.value} type="select">
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            }

                            {
                                element.type === 'autocomplete' &&
                                <Autocomplete
                                    id={element.name + index}
                                    options={element.values}
                                    getOptionLabel={(option) => option.label}
                                    required={element.required}
                                    renderInput={(params) => <TextField {...params} label={element.info} variant="standard" />}
                                />
                            }
                        </Grid>
                    ))
                }
            </Grid>

            <Grid container xs={12} justify="flex-end">
                <Grid item xs={2}>
                    <Button xs={2} item type="submit" className="ml-2" variant="contained" color="primary">Guardar</Button>
                </Grid>
                <Grid item xs={2}>
                    <Button xs={2} item type="button" variant="contained">Cancelar</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default FormScreen;