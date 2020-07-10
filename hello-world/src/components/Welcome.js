import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const {name, age} = this.props
        return <h1>Hello {name} Age = {age}, from Class Component !</h1>
    }
}

export default Welcome