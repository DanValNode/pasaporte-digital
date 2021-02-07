import React from "react";
import { FaBars } from 'react-icons/fa';
import { useIntl } from 'react-intl';
import Switch from "react-switch";
import Header from "./Header";

const Main = ({ collapsed, handleToggleSidebar, handleCollapsedChange, children }) => {
    const intl = useIntl();
    return (
        <main>
            <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                <FaBars />
            </div>

            <Header/>

            <div className="block " style={{display:'none'}}>
                <Switch
                    id="hide-menu"
                    height={16}
                    width={30}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onChange={handleCollapsedChange}
                    checked={collapsed}
                    onColor="#219de9"
                    offColor="#bbbbbb"
                />
                <span> {intl.formatMessage({ id: 'collapsed' })}</span>
            </div>

            {children}

        </main>
    )
}

export default Main;