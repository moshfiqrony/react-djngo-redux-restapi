import React from 'react'
import axios from 'axios'
import { withRouter} from "react-router-dom";

class InsertForm extends React.Component{

    constructor(){
        super()
        this.state = {
            name:'',
            address: '',
            image: '',
            redirect: false
        }


        this.onHandleChange = this.onHandleChange.bind(this)
        this.onSubmitHandle = this.onSubmitHandle.bind(this)
    }


    onHandleChange(e){
        const {name, value} = e.target

        this.setState({
            [name]: value
        })
    }




    onSubmitHandle(e){
        e.preventDefault()
        let name = e.target.elements.name.value;
        let address = e.target.elements.address.value;
        let file = e.target.elements.image.files[0];

        const fd = new FormData();

        fd.append('name', name);
        fd.append('image', file);
        fd.append('address', address);
        axios.post('http://127.0.0.1:8000/api/',fd)
            .then(res => alert(res.statusText))
            .then(()=>{return(this.props.history.push('/'))})
    }



    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandle}>
                    <input
                        type='text'
                        name='name'
                        onChange={this.onHandleChange}
                        value={this.state.name}

                    /><br/>
                    <input
                        type='text'
                        name='address'
                        onChange={this.onHandleChange}
                        value={this.state.address}

                    /><br/>
                    <input
                        type='file'
                        name='image'
                        onChange={this.onHandleChange}
                        value={this.state.image}

                    /><br/>
                    <input
                        type='submit'
                        value='Save'

                    />
                </form>
            </div>
        );
    }
}

export default withRouter(InsertForm);