import React from 'react';
import { Route, withRouter } from 'react-router-dom';

class Byline extends React.Component {
    constructor(props) {
        super (props);
    }
    
    render() {
        return (
            <div class="link-buttons">
                <button><a href="https://github.com/lisali72159" target="_blank"><i class="fab fa-github"></i> </a> </button>
                
                <button><a href="https://www.linkedin.com/in/lisa-li-293a53bb/" target="_blank"><i class="fab fa-linkedin-in"></i></a></button>
                
                <button><a href="https://angel.co/lisa-li-36" target="_blank"><i class="fab fa-angellist"></i></a></button>
                
                <button><a href="https://lisali72159.github.io/personalsite/" target="_blank"><i class="fas fa-user"></i></a></button>
            </div>
        )
    }
}

export default Byline;