import React, { useState } from "react";
import NavBar from "./NavBar";
import Main from "./Main";
import './styles/layout.scss';

function Layout(props) {

    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };

    const handleCollapsedChange = (checked) => {
        setCollapsed(checked);
    };

    return (
        <div className={`app ${toggled ? 'toggled' : ''}`}>
            <NavBar
                collapsed={collapsed}
                toggled={toggled}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
            />
            <Main
                toggled={toggled}
                collapsed={collapsed}
                handleToggleSidebar={handleToggleSidebar}
                handleCollapsedChange={handleCollapsedChange}
                children={props.children}
            />
        </div>
    )

}

export default Layout;