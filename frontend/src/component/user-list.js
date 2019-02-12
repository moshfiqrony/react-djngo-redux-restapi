import React from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../actions/index'
import ShowUsers from './show-user'

class Users extends React.Component{

    componentDidMount(){
        this.props.loadUser();
    }

    render() {
        if(!this.props.users){
            return(null)
        }else {
            return(
                <ShowUsers data = {this.props.users}/>
            )
        }
    }
}

function mapStateToProps(state) {
   return{
    users: state.users
   }
}


export default connect(mapStateToProps, actionCreators) (Users);