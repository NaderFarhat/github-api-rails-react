import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Hello extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <div>
                Hello {this.props.name}!
            </div>
          );
    }
}
 
 
export default Hello;