import React, {Component} from 'react';

// standard React way to create a form:
// so verbose! we can use hooks to simplify this...
class SimpleFormClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    };

    handleChange = (e) => {
        this.setState({ email: e.target.value })
    }; 
    
    render() {
        return (
            <div>
                <h1>You've entered: {this.state.email}</h1>
                <input 
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                />
            </div>
        )
    }
}
export default SimpleFormClass;