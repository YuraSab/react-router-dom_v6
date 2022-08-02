import React from 'react';
import {Link, Outlet} from "react-router-dom";

const About = () => {

    return (
        <div>
            <h1>
                About page
            </h1>

                <ul>
                    <Link to={'contacts'}>Our contacts</Link>
                </ul>
                <ul>
                    <Link to={'team'}>Our team</Link>
                </ul>

            {/*<Routes>*/}
            {/*    <Route path={'contacts'} element={<h1>Our contacts</h1>}/>*/}
            {/*    <Route path={'team'} element={<h1>Our team</h1>}/>*/}
            {/*</Routes>*/}
            <Outlet/>
        </div>
    )
}

export {About}