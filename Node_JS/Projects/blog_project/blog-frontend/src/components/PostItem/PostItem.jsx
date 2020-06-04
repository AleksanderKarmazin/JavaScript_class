import React from 'react';
import {Link} from 'react-router-dom'
import './PostItem.scss';


const PostItem = ({ title,  createdAt, _id, onRemve }) => {
    return (
        <div className="post-item">
            <Link href={`/post/${_id}`}>
                <h2>{title}</h2>
            </Link>
            <p><i>Post on {createdAt}</i>
                <a  href="javascript://" onClick={onRemve}>Remove</a>
                <Link to href={`/post/${_id}/edit`}>Edit</Link>
            </p>
        </div>
    );
}

export default PostItem;