import React from 'react'

const Post = ({post}) => {
  return (
    <article className='post'>
      <h2>{post.title}</h2>
      <p className='postDate'>{post.datetime}</p>
      <p className='postContent'>{(post.content).length <=30 ? post.content : `${(post.content).slice(0, 30)}...`}</p> 
    </article>
  )
}

export default Post