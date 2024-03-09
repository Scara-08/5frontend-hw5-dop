import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import fetchAllPosts from '../../store/reducers/PostsListCreator'
import PostListItem from './PostListItem'
import './posts.css'

const PostList = () => {
    const dispatch = useDispatch();
    const { posts, postsError, postsStatus } = useSelector((state) => state.postList)
    useEffect(() => {
        dispatch(fetchAllPosts());
    }, [])
    const postCases = {
        pending: 'loading...',
        fulfilled: posts?.map((post) => <PostListItem key={post.id} post={post} />),
        rejected: postsError,
    }
  return (
    <div>{posts.length && posts.map((post) => {
        return (
            <div className='post'>
                <p className='id'>{post.id}</p>
                <p>{post.title}</p>
                <p>{post.body.slice(0, 20)} <Link to={`/posts/${post.id}`}>More...</Link></p>
            </div>
        )
    })}</div>
  )
}

export default PostList;