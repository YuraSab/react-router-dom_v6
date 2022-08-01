import React from 'react';
import {Link, Outlet} from "react-router-dom";
import "./Latout.css";

const Layout = () => {

  return (
    <div className={'gridDiv'}>
        <header>
            <Link className={'link'} to={'/'}>
                <div className={'linkDiv'}>
                    Home
                </div>
            </Link>

            <Link className={'link'} to={'/about'}>
                <div className={'linkDiv'}>
                    About
                </div>
            </Link>
            <Link className={'link'} to={'/blog'}>
                <div className={'linkDiv'}>
                    Blog
                </div>
            </Link>
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