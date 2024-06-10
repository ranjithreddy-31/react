import React, { Component } from 'react'

export class Form extends Component {
constructor(){
    super();
    this.state = {username:"",
        comments:"",
        topic:"React"
    };
}

handleUsername = (event) => {
    this.setState((prevState)=>({
        username:event.target.value
    }))
}

handleComments = (event) => {
    this.setState((prevState)=>({
        comments:event.target.value
    }))
}
handleTopic = (event) => {
    this.setState((prevState)=>({
        topic:event.target.value
    }))
}

handleSubmit = (event) =>{
    alert(`Hello ${this.state.username}, You have entered these comments:${this.state.comments} on ${this.state.topic}`);
    event.preventDefault();
}
  render() {
    return (
     <form onSubmit={this.handleSubmit}>
        <div>
        <label>Username</label>
        <input type='text' value={this.state.username} onChange={this.handleUsername}></input>
        </div>
        <div>
        <label>Comments</label>
        <textarea value={this.state.comments} onChange={this.handleComments}></textarea>
        </div>
        <div>
        <label>Topic</label>
        <select value={this.state.topic} onChange={this.handleTopic}>
            <option value="Python">Python</option>
            <option value="React">React</option>
            <option value="Node">Node</option>
        </select>
        </div>
        <div>
            <button type='submit'>Submit</button>
        </div>

     </form>
    )
  }
}

export default Form
