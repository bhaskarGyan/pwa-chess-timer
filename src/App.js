import React, {Component} from 'react';
import {HashRouter,Switch,Route, Redirect} from 'react-router-dom';
import './common_css/font-awesome.css';
import './App.css';
import asyncComponent from "./components/AsyncComponent";

const DashboardAsync = asyncComponent(() => import("./scenes/dashboard"));
const PrefrenceAsync = asyncComponent(() => import("./scenes/prefrence"));

class App extends Component {

    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/dashboard" component={DashboardAsync}/>
                    <Route exact path="/prefrence" component={PrefrenceAsync}/>
                    <Redirect exact from="/" to="/dashboard" />
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
