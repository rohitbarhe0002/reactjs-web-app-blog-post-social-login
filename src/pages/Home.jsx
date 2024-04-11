import React from 'react'
import Card from '../components/Card'
import { posts } from '../data'
function Home() {
  return (
    <div className='home'>
        {posts.map((post)=><Card post={post}/>)}
    </div>
  )
}

export default Home