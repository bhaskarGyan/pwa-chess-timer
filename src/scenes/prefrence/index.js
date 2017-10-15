import React, {Component} from 'react';
import Button from 'material-ui/Button';
import { ValidatorForm } from 'react-form-validator-core';
import { TextValidator} from 'react-material-ui-form-validator';
import {Redirect} from 'react-router-dom';
import './index.css';

class Prefrence extends Component{
    constructor(props){
        super(props);
        let elapsedTime = JSON.parse(localStorage.getItem('pwa-chess-timer-initialState'));
        if(elapsedTime){
            elapsedTime = elapsedTime.elapsedTime;
        }else {
            elapsedTime = '05:00'
        }
        elapsedTime = elapsedTime.split(':');
        this.state = {
            playTime:parseFloat(elapsedTime[0])
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        console.log(e);
        localStorage.setItem('pwa-chess-timer-initialState',JSON.stringify({
            elapsedTime: this.state.playTime+":00"

        }));
        this.setState({navigate:true});
    }
    handleInputChange(e){
        let inputValue = e.target.value;
        inputValue = inputValue.replace(/[^\d,]+/g, '');
      this.setState({playTime:inputValue})
    }

    render(){
        if(this.state.navigate){
            return  (
                <Redirect to="/dashboard"/>
            );
        }
        return (
           <article>
            <section className="prefrence">
                <ValidatorForm
                    className="prefrence__form"
                    ref="form"
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                >
                    <TextValidator
                        id="time"
                        label="Game Time (in Minutes)"
                        name="time"
                        value={this.state.playTime}
                        onChange={this.handleInputChange}
                        margin="normal"
                    />
                    <Button raised color="primary" type="submit" >Save</Button>
                </ValidatorForm>

            </section>
           </article>
        )
    }
}

export default Prefrence;