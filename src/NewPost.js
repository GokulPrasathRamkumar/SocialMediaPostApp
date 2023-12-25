import React from 'react'

const NewPost = ({handleSubmit, postTitle, setPostTitle, postContent, setPostContent}) => {
  return (
    <main className='NewPost'>
      <h2>New Post</h2>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title :</label>
        <input
          id='postTitle'
          type='text'
          value={postTitle}
          required
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor='postContent'>Post :</label>
        <textarea
          id='postContent'
          required
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </main>
  )
}

export default NewPost