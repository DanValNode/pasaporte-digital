import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./auth";
import DashboardRoutes from "./dashboardRoutes";
import Home from "../infrastructure/components/home/HomeScreen";
import LoginScreen from "../infrastructure/components/auth/LoginScreen";

const AppRouter = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginScreen} />
                <Route exact path="/home" component={Home} />

                <Route path="/" render={ () => <Auth> <DashboardRoutes /> </Auth>} />
            </Switch>
        </Router>
    )

}

export default AppRouter;