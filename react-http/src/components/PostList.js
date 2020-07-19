import React, { Component } from 'react'

import axios from 'axios'

class PostList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/posts')
        axios.get('http://localhost:8080/topics')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
    const sList = this.state.posts.map(post => <div key={post.id}>ID : {post.id} Name : {post.name} Description : {post.description}</div>)
        return (
            <div>
                List of posts
                <div>{sList}</div>
            </div>
        )
    }
}

export default PostList
