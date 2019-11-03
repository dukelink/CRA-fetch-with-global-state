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
import { StateProvider } from './StateProvider';


const Main = () => {

    const initialState = {
        counter: 0
    };

    const reducer = (state:any, action:any) => {
        switch (action.type) {
            case 'increment':
                return { 
                    ...state,
                    counter: state.counter + 1 
                }
        }
    }

    return (
        <StateProvider initialState={initialState} reducer={reducer}>
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
            </Router>
        </StateProvider>
    );
}

ReactDOM.render( <Main/>, document.getElementById('root') );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
