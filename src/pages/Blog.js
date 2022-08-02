import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";

const Blog = () => {

    const [posts, setPosts] = useState([]);
    // console.log(useLocation());
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('post') || '';



    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value;

        setSearchParams({post: query})
    }

    return (
        <div>
            <h1>
                Blog page
            </h1>
            <form autoComplete={'off'} onSubmit={handleSubmit}>
                <input type={'search'} name={'search'}/>
                <input type={'submit'} value={'Search'}/>
            </form>

                <Link to={'/blog/new'}>Add new post</Link>
            {
                posts.filter(
                    post => post.title.includes(postQuery)
                ).map(post => (
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