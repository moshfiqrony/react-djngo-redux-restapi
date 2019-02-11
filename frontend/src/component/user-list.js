import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {loadUser} from "../actions";

class Users extends React.Component{

    handleUsers(){
        console.log(this.props.users)
        if (this.props.users == null){
            return null
        } else{
            return(
                this.props.users.map((user) => {
                        return(
                            <div>
                                <p>{user.name}</p>
                                <img src={user.image} width='400' alt='...' />
                            </div>
                        )
                    })
            )
        }

    }

    render() {
        return (
            <div>
                {this.props.loadUser()}
                {this.handleUsers()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return{
        users: state.users
    }
}


function matchDispatchToProps(dispatch) {
    return(
        bindActionCreators({loadUser: loadUser}, dispatch)
    )
}


export default connect(mapStateToProps, matchDispatchToProps) (Users);