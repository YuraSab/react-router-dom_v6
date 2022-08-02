import React from 'react';
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Blog} from "./pages/Blog";
import {Route, Routes} from "react-router-dom";
import {NotFound} from "./pages/NotFound";
import "./App.css";
import {Layout} from "./components/Layout";
import {SinglePage} from "./pages/SinglePage";
import {CreatePost} from "./pages/CreatePost";
import {EditPost} from "./pages/EditPost";

function App() {

    return (
        <div>
            <div className={'routes'}>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={'/about'} element={<About/>}/>
                        <Route path={'/blog'} element={<Blog/>}/>
                        <Route path={'/blog/:id'} element={<SinglePage/>}/>
                        <Route path={'/blog/:id/edit'} element={<EditPost/>}/>
                        <Route path={'/blog/new'} element={<CreatePost/>}/>
                        <Route path={'*'} element={<NotFound/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;