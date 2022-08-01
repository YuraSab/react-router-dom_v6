import React from 'react';
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Blog} from "./pages/Blog";
import {Link, Route, Routes} from "react-router-dom";
import {NotFound} from "./pages/NotFound";
import "./App.css";

function App() {

    return (
        <div>
            <div className={'header'}>
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
            </div>

            <div className={'routes'}>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/about'} element={<About/>}/>
                    <Route path={'/blog'} element={<Blog/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;