import React, { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

const PostListItem = () => {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  // const { posts, postsError, postsStatus } = useSelector((state) => state.postList)
  // const dispatch = useDispatch();
  // const postsDispatch = dispatch(posts(null))
  // const postsErrorDispatch = dispatch(postsError(''))

  useEffect(() =>{
    setIsLoading(true);
    setPost(null)
    setError('');
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then((response) => response.json())
    .then((data) => setPost(data))
    .catch((err) => setError(err.message))
    .finally(() => setIsLoading(false))
  }, [])

  return (
    <div>
      <div className='destroyer'>
      <h1>{post && JSON.stringify(post.id)}</h1>
      <p>{post && JSON.stringify(post.title)}</p>
      <p>{post && JSON.stringify(post.body)}</p>
      </div>
    </div>
  )
}

export default PostListItem;