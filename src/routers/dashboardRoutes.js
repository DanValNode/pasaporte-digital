import React, {Fragment} from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../infrastructure/components/shared/Layout";
import ListUsersScreen from "../infrastructure/components/users/ListUsersScreen";
import NewUserScreen from "../infrastructure/components/users/NewUserScreen";

const DashboardRoutes = () => {
    return(
        <Fragment>
            <Switch>
                <Layout>
                    <Route exact path="/users" component={ListUsersScreen} />
                    <Route exact path="/new-user" component={NewUserScreen} />
                </Layout>
            </Switch>
        </Fragment>
    )
}

export default DashboardRoutes;