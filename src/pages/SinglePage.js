import React, {Component, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";

const SinglePage = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(value => value.json())
            .then(value => setPost(value))
    }, [id])

    //    step back one 1 page ago
    const goBack = () => navigate(-1);
    {/* Bad approach */}
    const goHome = () => navigate(`/`, {replace: true});

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {/* Bad approach */}
            <button onClick={goHome}>Go home</button>
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