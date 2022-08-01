import React from 'react';
import {NavLink} from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {


    const active = ({isActive}) => isActive ? "active_link" : "link";

    return (
        <div>
            <NavLink
                to={to}
                className={active}
                {...props}
            >
                {children}
            </NavLink>
        </div>
    )
}

export {CustomLink}