import React, { Component } from 'react'
import axios from 'axios'
class PostsList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[]
      }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            this.setState(() => ({ posts: response.data }));
        })
        .catch((error)=>{console.log(error)})
    }
  render() {
    const {posts} = this.state
    return (
      <div>
        <h1>List of Posts</h1>
        {posts.map(
            (post)=>{ return <h4 key={post.id}>{post.title}</h4>}
        )}
      </div>
    )
  }
}

export default PostsList
