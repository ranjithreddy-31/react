import React, {useState, useEffect} from 'react'
import axios from 'axios'

function FetchPostByID() {
    const [post, setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }
    // here re- happens only when there is change in state variable specified
    // if it is not specified, it only fetches data once and displays it
    // it won't fetch data gaian as long as the state variable is specified in the dependency array
    useEffect(()=>{
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response=>{
                console.log(response)
                setPost(()=>{
                    return response.data
                })
            })
            .catch(error=>console.log(`Error while fetching data ${error}`))
        },[idFromButtonClick]
    )
  return (
    <div>
        <label>Post Id</label>
        <input type='text' onChange={e => setId(e.target.value)} value={id}></input>
        <button type="button" onClick={handleClick}>Fetch</button>
        <div>{post.title}</div>
    </div>
  )
}

export default FetchPostByID
