import Grid from '@material-ui/core/Grid';
import './styles/login.scss';
import Paper from '@material-ui/core/Paper';
import backgroundImg from '../resources/images/background-login.png';
import React, {useState} from "react";
import {Box, Button, Card, CardContent, CardHeader, TextField, Checkbox, FormControlLabel} from "@material-ui/core";
import {Link} from 'react-router-dom';

function LoginScreen() {
    const [userType, setUserType] = useState('');

    return (
        <Grid container component="main" className="main-login">

            <Grid className="bg-gray" item xs={12} sm={6} md={4} component={Paper} elevation={6} square>
                <div className="paper">

                    <h2 className="title mt-2">Pasaporte Digital</h2>

                    <Card className="mt-1 card-login">
                        <CardHeader title="Iniciar sesión" className="subtitle-login mt-2"/>
                        <CardContent>

                            <Grid container justify="center">
                                {
                                    userType === '' &&
                                    <Box mt={2}>
                                        <Button type="button" variant="contained"
                                                color="primary" onClick={() => setUserType('eco')}>Ecopetrol</Button>
                                        <Button type="button" className="ml-1 btn-eco-secondary"
                                                variant="contained" onClick={() => setUserType('ext')}>Externo</Button>

                                        <Box mt={5}>
                                            <Grid container className="mt-5">
                                                <Grid item xs={12}>
                                                    ¿Aún no tienes cuenta?
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Link href="#" variant="body2">
                                                        {"Registrate"}
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                        </Box>

                                    </Box>
                                }
                                {
                                    userType === 'eco' &&
                                    <Box mt={4}>
                                        <Button type="button" variant="contained"
                                                color="primary" onClick={() => alert("redirect AAD")}>Ecopetrol</Button>
                                    </Box>
                                }
                                {
                                    userType === 'ext' &&
                                    <form className="form">
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth={true}
                                            id="email"
                                            label="Correo"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus
                                        />
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth={true}
                                            name="password"
                                            label="Contraseña"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                        />
                                        <Box style={{float:'left'}}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox value="remember" color="primary"/>}
                                                label="Recordarme"
                                            />
                                        </Box>

                                        <Button
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                            className="submit btn-eco-primary"
                                            fullWidth={true}
                                        >
                                            Ingresar
                                        </Button>

                                        <Button
                                            variant="contained"
                                            className="btn-eco-secondary mt-1"
                                            fullWidth={true}
                                            onClick={() => setUserType('')}
                                        >
                                            Cancelar
                                        </Button>

                                        <Grid container>
                                            <Grid item xs className="mt-1">
                                                <Link href="#" variant="body2">
                                                    ¿Olvidaste tu contraseña?
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </form>
                                }
                            </Grid>
                        </CardContent>
                    </Card>

                    {
                        userType === '' &&
                        <Grid xs={12} className="copyright mt-5" justify="center">
                        <span>
                            2021 Copyrigth-Ecopetrol SA
                        </span><br />
                            <span>
                            © Todos los derechos reservados
                        </span>
                        </Grid>
                    }

                </div>
            </Grid>

            <Grid item xs={false} sm={6} md={8} className="image"
                  style={{backgroundImage: `url(${backgroundImg})`}}
            />

        </Grid>
    )
}

export default LoginScreen;