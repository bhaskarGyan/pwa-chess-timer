import React, {Component} from 'react'
import Timer from './components/timer';
import Setting from './components/setting';

class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {running:{timer1:false,timer2:false}};
        this.resetTimer = this.resetTimer.bind(this);
        this.updateRunningStatus = this.updateRunningStatus.bind(this);
    }
    updateRunningStatus(timerToStart){
        let state = this.state;
        Object.keys(state.running).forEach(function(key,index) {
            state.running[key] = false;
        });
        state.running[timerToStart] = true;
        this.setState(state);
    }
    resetTimer(){
        this.timer1.resetState();
        this.timer2.resetState();
        this.updateRunningStatus()
    }
    render(){
        return (
            <article className="wrapper">
                <Timer isRunning={this.state.running.timer1}
                       hour="1"
                       minutes="5"
                       seconds="0"
                       onStop={this.updateRunningStatus}
                       siblingTimer="timer2"
                       mainTimer = "timer1"
                       ref = {instance => this.timer1 = instance}
                />
                <Setting onClick={this.updateRunningStatus} onReset={this.resetTimer} />
                <Timer isRunning={this.state.running.timer2}
                       hour="01"
                       minutes="5"
                       seconds="0"
                       onStop={this.updateRunningStatus}
                       siblingTimer="timer1"
                       mainTimer = "timer2"
                       ref = {instance => this.timer2 = instance}
                />
            </article>
        )
    }
}

export default Dashboard;