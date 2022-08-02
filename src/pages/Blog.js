import React from 'react';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const Blog = () => {


    const [posts, setPosts] = useState([]);
    console.log(useLocation());


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])


    return (
        <div>
            <h1>
                Blog page
            </h1>
            {
                posts.map(post => (
                    <Link
                        key={post.id}
                        to={`/blog/${post.id}`}
                    >
                        <li>{post.title}</li>
                    </Link>
                ))
            }
        </div>
    )
}

export {Blog}