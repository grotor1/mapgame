import React from 'react';
import 'whatwg-fetch';
import Main from "./components/Main";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Login} from "./components/Login";


function App (){
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
