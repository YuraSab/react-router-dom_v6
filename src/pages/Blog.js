import React, {useEffect, useState} from 'react';
import {Link, useSearchParams} from "react-router-dom";

const Blog = () => {

    const [posts, setPosts] = useState([]);
    // console.log(useLocation());
    const [searchParams, setSearchParams] = useSearchParams();
    const postQuery = searchParams.get('post') || '';
    const latest = searchParams.has('latest');
    const startsFrom = latest ? 80 : 1;

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(value => value.json())
            .then(value => setPosts(value))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value;

        const isLatest = form.latest.checked;
        const params = {}

        if(query.length) params.post = query;
        if(isLatest) params.latest = true;

        setSearchParams(params);
    }

    return (
        <div>
            <h1>
                Blog page
            </h1>
            <form autoComplete={'off'} onSubmit={handleSubmit}>
                <input type={'search'} name={'search'}/>
                <label style={{padding: '0 1rem'}}> New only
                    <input type={'checkbox'} name={'latest'}/>
                </label>
                <input type={'submit'} value={'Search'}/>
            </form>

                <Link to={'/blog/new'}>Add new post</Link>
            {
                posts.filter(
                    post => post.title.includes(postQuery) && post.id >= startsFrom
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