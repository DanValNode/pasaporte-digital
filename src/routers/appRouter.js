import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./auth";
import DashboardRoutes from "./dashboardRoutes";
import Home from "../infrastructure/components/home/HomeScreen";

const AppRouter = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/home" component={Home} />

                <Route path="/" render={ () => <Auth> <DashboardRoutes /> </Auth>} />
            </Switch>
        </Router>
    )

}

export default AppRouter;