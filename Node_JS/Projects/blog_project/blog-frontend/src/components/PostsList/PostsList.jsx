import React from 'react';
import PostItem from '../PostItem/PostItem';
import './PostsList.scss';


const PostsList =({ posts })=> {
    return (
      <div className="post-items">
        {posts.map( posts=>(
            <PostItem {... posts} />
            
        
            ))}
        
      </div>
    );
  }
  
  export default PostsList;
  