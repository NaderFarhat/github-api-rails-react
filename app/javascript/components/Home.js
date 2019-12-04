import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';

class Home extends Component {
    render() { 
        return (
            <div>
                <Navbar/>
                <Form />
            </div>
          );
    }
}
 
export default Home;