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
import {Navigate} from "react-router";
import {LoginPage} from "./pages/LoginPage";
import {RequireAuth} from "./hoc/RequireAuth";
import {AuthProvider} from "./hoc/AuthProvider";



function App() {

    return (
        <div>
            <div className={'routes'}>
                <AuthProvider>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<Home/>}/>

                        {/*                 /* - all that is after '/'                  */}
                        <Route path={'/about/*'} element={<About/>}/>

                        <Route path={'/about-us'} element={<Navigate to={'/about'} replace/>}/>
                        <Route path={'/blog'} element={<Blog/>}/>
                        <Route path={'/blog/:id'} element={<SinglePage/>}/>
                        <Route path={'/blog/:id/edit'} element={<EditPost/>}/>
                        <Route path={'/blog/new'} element={
                            <RequireAuth>
                                <CreatePost />
                            </RequireAuth>
                        }/>
                        <Route path={'/login'} element={<LoginPage/>}/>
                        {/*<Route path={'/auth'} element={<AuthProvider/>}/>*/}
                        <Route path={'*'} element={<NotFound/>}/>
                    </Route>
                </Routes>
                </AuthProvider>
            </div>
        </div>
    );
}

export default App;