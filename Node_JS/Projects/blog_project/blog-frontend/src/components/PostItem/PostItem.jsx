import React from 'react';
import {Link} from 'react-router-dom'
import './PostItem.scss';


const PostItem = ({ title,  createdAt, _id }) => {
    return (
        <div className="post-item">
            <Link href={`/post/${_id}`}>
                <h2>{title}</h2>
            </Link>
            <p><i>Post on {createdAt}</i>
                <Link to href="#">Remove</Link>
                <Link to href="#">Edit</Link>
            </p>
        </div>
    );
}

export default PostItem;