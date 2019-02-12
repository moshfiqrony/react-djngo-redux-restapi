import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/index'

class Users extends React.Component{

    handleLoad(){
        this.props.users.map((user) => {
            return(<p>{user.name}</p>)
        })
    }


    render() {
        return (
            <div>
                <button onClick={this.props.loadUser}>Click Me</button>
                <button onClick={this.handleLoad}>cc</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
   return{
    users: state.users
   }
}


export default connect(mapStateToProps, actionCreators) (Users);