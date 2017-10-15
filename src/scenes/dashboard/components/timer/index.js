import React, {Component} from 'react';
import './index.css';
const initialState = {
    elapsedTime: '05:00'

};
class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
        this.startTimer = this.startTimer.bind(this);
        this.toggleTimer = this.toggleTimer.bind(this);
        this.timer = null;

    }

     getInitialState(){
        const saveState = JSON.parse(localStorage.getItem('pwa-chess-timer-initialState'));
        return saveState || initialState;
    }

    resetState(){
        this.setState(this.getInitialState());
    }
    getClassName(){
        let className = "timer";

        if(this.props.isRunning){
            className += ' timer__wrapper--active'
        }
        return className;
    }
    addLeadingZero(val) {
        if (val.length > 1) {
            return val;
        }
        if (val >= 0 && val <= 9) {
            return '0' + val;
        }
        return val;
    }

    toggleTimer(){
        this.props.onStop(this.props.siblingTimer);
    }

    stopTimer() {
        clearInterval(this.timer);
        this.timer = null;
    }

    startTimer() {
        const self = this;
        let time = this.state.elapsedTime.split(':');
        let minutes = time[ 0 ];
        let seconds = time[ 1 ];
        this.timer = setInterval(() => {
            seconds--;
            if (seconds < 0) {
                seconds = '59';
                minutes -= 1;
                if(minutes < 0){
                    minutes = 0;
                    seconds = 0;
                    self.stopTimer();
                }
            }

            self.setState({elapsedTime: self.addLeadingZero(minutes) + ':' + self.addLeadingZero(seconds)})
        }, 1000);

    }

    render() {
        if(this.props.isRunning){
            if(!this.timer) this.startTimer();
        }else {
            this.stopTimer();
        }
        return (
            <section className={this.getClassName()} onClick={this.toggleTimer}>
                <div className="timer__wrapper">
                    {this.state.elapsedTime}
                </div>
            </section>
        )
    }
}

export default Timer;