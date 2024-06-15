import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetch() {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                setPosts((prevPosts)=>{
                    return [...response.data]
                })
            })
            .catch(error=>console.log(`Error while fetching data ${error}`))
        },[]
    )
  return (
    <div>
      <ul>
        {posts.map(post=><li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  )
}

export default DataFetch
