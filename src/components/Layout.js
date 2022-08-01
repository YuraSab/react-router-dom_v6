import React from 'react';
import {Outlet} from "react-router-dom";
import "./Latout.css";
import {CustomLink} from "./CustomLink";

const Layout = () => {


  return (
    <div className={'gridDiv'}>
        <header>
            {/* NavLink - same like Link but added css-class "active" if this is current link */}
            <CustomLink to="/" >
                <div className={'linkDiv'}>
                    Home
                </div>
            </CustomLink>

            <CustomLink to={'/about'}>
                <div className={'linkDiv'}>
                    About
                </div>
            </CustomLink>
            <CustomLink to={'/blog'}>
                <div className={'linkDiv'}>
                    Blog
                </div>
            </CustomLink>
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