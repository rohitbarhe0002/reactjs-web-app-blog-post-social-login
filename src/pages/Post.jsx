import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../data';

function Post() {
  const { id } = useParams();
const post = posts.find((itm)=>itm?.id == id);
  return (
  <div className="post">
    <img src={post?.img} alt="" className="postImg"/>
  <h1 className="postTitle">{post?.title}</h1>
  <p className="postDesc">{post?.desc}</p>
  <p className="postLongDesc">{post?.longDesc}</p>


  </div>
  )
}

export default Post