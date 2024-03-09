import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage, HomePage } from './Pages';
import { PostList, PostListItem } from './Components';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
        <Routes>
            <Route element={<MainPage />} path='/'>
                <Route element={<HomePage />} path='/'/>
                <Route element={<PostList />} path='/posts'/>
                <Route element={<PostListItem />} path='/posts/:id'/>
            </Route>
        </Routes>
    </Router>
  )
}

export default App