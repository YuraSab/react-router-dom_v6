import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import "./Latout.css";

const Layout = () => {

  return (
    <div className={'gridDiv'}>
        <header>
            {/* NavLink - same like Link but added css-class "active" if this is current link */}
            <NavLink className={({isActive}) => isActive ? 'active_link' : 'link'} to={'/'}>
                <div className={'linkDiv'}>
                    Home
                </div>
            </NavLink>

            <NavLink className={({isActive}) => isActive ? 'active_link' : 'link'} to={'/about'}>
                <div className={'linkDiv'}>
                    About
                </div>
            </NavLink>
            <NavLink className={({isActive}) => isActive ? 'active_link' : 'link'} to={'/blog'}>
                <div className={'linkDiv'}>
                    Blog
                </div>
            </NavLink>
        </header>

        <main>
            <Outlet/>
            <div className={'white-space'}>

            </div>

        </main>

        <footer>
            <h1>footer</h1>
        </footer>
    </div>
  )
}

export { Layout }