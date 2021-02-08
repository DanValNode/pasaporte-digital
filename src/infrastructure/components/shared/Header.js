import React from "react";
import reactLogo from "../../../logo.svg";
import { useIntl } from 'react-intl';

const Header = () => {
    const intl = useIntl();
    return (
        <header>
            <h1>
                <img width={80} src={reactLogo} alt="react logo"/>
                {intl.formatMessage({id: 'title'})}
            </h1>

        </header>
    )
}

export default Header;