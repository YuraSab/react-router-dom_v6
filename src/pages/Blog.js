import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

const Blog = () => {

    const [posts, setPosts] = useState([]);
    // console.log(useLocation());


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
                <Link to={'/blog/new'}>Add new post</Link>
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