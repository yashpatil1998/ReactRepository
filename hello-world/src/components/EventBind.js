import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }

        this.clickHanlder = this.clickHanlder.bind(this)
    }

    clickHanlder() {
        this.setState({
            message: 'GoodBye'
        })
        console.log(this)
    }


    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={() => this.clickHanlder()}>Click</button> */}
                {/* Optimised way below */}
                <button onClick={this.clickHanlder}>Click</button>
            </div>
        )
    }
}

export default EventBind
