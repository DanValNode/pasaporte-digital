import React, {Fragment, useState} from 'react';
import {
    Button, Grid, TextField, FormHelperText, RadioGroup,
    FormControlLabel, Checkbox, MenuItem, Box, FormControl, FormLabel,
    Radio
} from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import {makeStyles} from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import commonValidators from "../../../utils/commonValidators";

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

const defaultSize = {
    xs: 12,
    md:6,
    lg:3
}

function FormScreen(props) {

    let jsonState = {};
    let errors = {};
    props.entity.forEach( elem => {
        if(typeText.indexOf(elem.type) >= 0)
            jsonState[elem.name] = '';
        else if(elem.type === 'checkbox')
            jsonState[elem.name] = false;
        else if (elem.type === 'date' || elem.type === 'time')
            jsonState[elem.name] = new Date();
        else
            jsonState[elem.name] = '';

        errors[elem.name] = false;
    });

    const [state, setState] = useState(jsonState);
    const [errorState, setErrorState] = useState(errors);
    const classes = useStyles();

    const switchValidate = (validators, validations, name, value) => {
        validations.forEach(validate => {
            switch (validate) {
                case 'email' :
                    validators[name] = !commonValidators.emailValidate(value);
                    setErrorState(validators);
                    break;
                case 'letter':
                    validators[name] = !commonValidators.letterValidate(value);
                    setErrorState(validators);
                    break;
                case 'number':
                    validators[name] = !commonValidators.numberValidate(value);
                    setErrorState(validators);
                    break;
                default:
                    console.log("validador no encontrado");
            }
        });
    }

    const handleChange = (event) => {
        //exec validations
        const validations = props.entity.find(x => x.name === event.target.name)?.validator;
        if(validations !== undefined) {
            let validators = {...errorState};
            switchValidate(validators, validations, event.target.name, event.target.value);
        }

        let currentState = {...state};
        if(event.target.type === 'date' || event.target.type === 'time')
            currentState[event.target.name] = new Date(event.target.value);
        if(event.target.type === 'checkbox')
            currentState[event.target.name] = event.target.checked;
        else
            currentState[event.target.name] = event.target.value;

        setState(currentState);
    }

    const handleSubmit = (event, state) => {
        event.preventDefault();
        alert("interno");
    }

    return (
        <Fragment>
            {
                props.title &&
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >
                    {props.icon}
                    <h2 className="title-eco ml-1">{props.title}</h2>
                </Grid>
            }

            <form className={classes.root}
                  onSubmit={(e) =>
                      props.handleSubmit !== undefined ? props.handleSubmit(e, state) : handleSubmit(e, state)}>
                <Grid container spacing={2}>
                    {
                        props.entity.map((element, index) => (
                            <Grid key={index} item
                                  xs={element.size?.xs || defaultSize.xs}
                                  md={element.size?.md || defaultSize.md}
                                  lg={element.size?.lg || defaultSize.lg}>
                                {
                                    typeText.indexOf(element.type) >= 0 &&
                                    <Fragment>
                                        {/*<InputLabel htmlFor={element.name + index}>{element.label}</InputLabel>*/}
                                        <TextField fullWidth={true} type={element.type}
                                                   error={errorState[element.name]}
                                                   value={state[element.name]}
                                                   onChange={handleChange}
                                                   label={element.label}
                                                   required={element.required}
                                                   name={element.name} id={element.name + index}
                                                   inputProps={{
                                                       maxLength: 50,
                                                   }}
                                                   aria-describedby={element.name + "helper-text" + index}/>
                                        <FormHelperText id={element.name + "helper-text" + index}>
                                            {element.info}
                                        </FormHelperText>
                                    </Fragment>
                                }
                                {
                                    element.type === 'checkbox' &&
                                    <FormControlLabel
                                        control={
                                            <Checkbox name={element.name} value={state[element.name]}
                                                      error={errorState[element.name]}
                                                       onChange={handleChange}
                                                       />}
                                        label={element.info}
                                    />
                                }
                                {
                                    element.type === 'select' &&
                                    <TextField
                                        id={element.name + index}
                                        error={errorState[element.name]}
                                        select
                                        label="Seleccione ..."
                                        name={element.name}
                                        datatype={element.type}
                                        value={state[element.name]}
                                        onChange={(event) => handleChange({
                                            target: {type: "select", value: event.target.value, name: event.target.name}
                                        })}
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
                                    element.type === 'autocomplete' && element.values !== undefined &&
                                    <Autocomplete
                                        id={element.name + index}
                                        error={errorState[element.name]}
                                        options={element.values}
                                        getOptionLabel={(option) => option.label||""}
                                        inputValue={state[element.name]}
                                        onInputChange={(event, newInputValue) => {
                                            handleChange({ target: { value: newInputValue, type:"autocomplete", name: element.name } })
                                        }}
                                        renderInput={(params) =>
                                            <TextField {...params} label={element.info}
                                                       required={element.required}
                                                       variant="standard" />
                                        }
                                    />
                                }

                                {
                                    element.type === 'date' &&
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            id={element.name + "date-picker-dialog" + index}
                                            label="Date picker dialog"
                                            format="dd/MM/yyyy"
                                            value={state[element.name]}
                                            onChange={(value) => handleChange({ target: { value, type:"date", name: element.name } })}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                            required={element.required}
                                            maxDate={state[element.maxDate] || element.maxDate}
                                            minDate={state[element.minDate] || element.minDate}
                                        />
                                    </MuiPickersUtilsProvider>
                                }

                                {
                                    element.type === 'time' &&
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardTimePicker
                                            id={element.name + "time-picker" + index}
                                            label="Time picker"
                                            value={state[element.name]}
                                            onChange={(value) => handleChange({ target: { value, type:"time", name: element.name } })}
                                            KeyboardButtonProps={{
                                                'aria-label': 'Cambiar Hora',
                                            }}
                                            required={element.required}
                                        />
                                    </MuiPickersUtilsProvider>
                                }

                                {
                                    element.type === 'radio' &&
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">{element.label}</FormLabel>
                                        <RadioGroup aria-label={element.label} name={element.name}
                                                    value={state[element.name]} onChange={handleChange} row>
                                            {
                                                element.values !== null &&
                                                element.values.map((x, index) => (
                                                    <FormControlLabel
                                                        key={index}
                                                        value={x.value}
                                                        control={<Radio color="primary" required={element.required} />}
                                                        label={x.label}
                                                        labelPlacement="bottom"
                                                    />
                                                ))
                                            }
                                            {/*<FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />*/}
                                        </RadioGroup>
                                    </FormControl>
                                }
                            </Grid>
                        ))
                    }
                </Grid>

                <Grid container justify="flex-end">
                    <Box mt={4}>
                        <Button type="submit" variant="contained" color="primary">Guardar</Button>
                        <Button type="button" className="ml-1" variant="contained">Cancelar</Button>
                    </Box>
                </Grid>
            </form>
        </Fragment>
    )
}

export default FormScreen;