import React from 'react'


class ShowUsers extends React.Component{

    render() {
        return(
            this.props.data.map((user) => {
                return(<div>
                    <h1>{user.name}</h1>
                    <p>{user.address}</p>
                    <img src={user.image} alt='hfbdjsh' width='300'/>

                </div>)
            })
        )
    }
}

export default ShowUsers;