import React, { Component } from 'react';
import Users from './component/user-list'
import InsertForm from './component/user-reg-form'
import {BrowserRouter, Route} from 'react-router-dom'


class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Route path='/' component={InsertForm}/>
                        <Route path='/' component={Users}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
