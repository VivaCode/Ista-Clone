import React from 'react';
import Post from './Post'
import './Posts.css'

const PostContainer = (props) => {
    return (
        <div className='post-container-wrapper'>
           {props.data.map(p => <Post key={p.imageURL} post={p} />)}
        </div>
    );
};

export default PostContainer;