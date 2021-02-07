import React, {Component, Fragment} from "react";
import {Redirect} from "react-router-dom";

class Auth extends Component {

    state = {
        isAuthenticated: ""
    }


    componentDidMount() {
        this.setState({
            isAuthenticated: "usuario"
        });
    }


    render() {

        return(
            this.state.isAuthenticated === "" ?
                <div>Cargando</div> :
                this.state.isAuthenticated !== null ?
                    <Fragment>
                        { this.props.children}
                    </Fragment> : <Redirect to={'/'} />
        )

    }

}

export default Auth;
