import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch, Link,
    Route // ,    useParams
} from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/'>
                <Link to="/App">APP</Link>
                <hr/>
                HOME PAGE!
            </Route>
            <Route exact path='/App'>
                <Link to="/">HOME</Link>
                <hr/>
                <App/>
            </Route>
        </Switch>
    </Router>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
