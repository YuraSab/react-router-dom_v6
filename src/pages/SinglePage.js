import React, {Component, useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Link} from "react-router-dom";

const SinglePage = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(value => value.json())
            .then(value => setPost(value))
    }, [id])

    return (
        <div>
            {
                post && (
                    <div>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                        <Link to={`/blog/${id}/edit`}>Edit post</Link>
                    </div>
                )
            }
        </div>
    )
}

export {SinglePage}