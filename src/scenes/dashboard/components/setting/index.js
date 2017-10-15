import React, {Component} from 'react';
import './index.css';
import {Link} from 'react-router-dom';
class Setting extends Component{
    render(){
        return(
            <ul className="settings">
                <li className="settings__list"><Link to="/prefrence"><i className="fa fa-cog" aria-hidden="true"></i></Link></li>
                <li className="settings__list" onClick={this.props.onClick}><i className="fa fa-pause" aria-hidden="true"></i></li>
                <li className="settings__list" onClick={this.props.onReset}><i className="fa fa-undo" aria-hidden="true"></i></li>
            </ul>
        )
    }
}
export default Setting;