import React from 'react';
import { Route, withRouter } from 'react-router-dom';

class Byline extends React.Component {
    constructor(props) {
        super (props);
    }
    
    render() {
        return (
            <div className="link-buttons">
                <button id="github"><a href="https://github.com/lisali72159" target="_blank"><i className="fab fa-github"></i> </a> </button>
                
                <button id="linkedin"><a href="https://www.linkedin.com/in/lisa-li-293a53bb/" target="_blank"><i className="fab fa-linkedin-in"></i></a></button>
                
                <button id="angellist"><a href="https://angel.co/lisa-li-36" target="_blank"><i className="fab fa-angellist"></i></a></button>
                
                <button id="personalsite"><a href="https://lisali72159.github.io/personalsite/" target="_blank"><i className="fas fa-user"></i></a></button>
            </div>
        )
    }
}

export default Byline;