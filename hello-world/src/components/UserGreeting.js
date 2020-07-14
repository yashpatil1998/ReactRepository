import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }


    render() {

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome User</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return (
        //     <div>
        //         {message}
        //     </div>
        // )
        return (
            this.state.isLoggedIn ?
                <div>Welcome User</div> :
                <div>Welcome Guest</div>
        )
    }
}

export default UserGreeting
