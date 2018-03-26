import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";


import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import ReactV  from "./view/react/react";

const router = (
    <Router>
            {/* <Route path='/' component={KaiPian}/> */}
            <Route path='/' component={App}>
                <Route path='/react' component={ReactV}/>
                {/* <Route path='/xxx' component={xxx}/>
                <Route path='/xxx' component={xxx}/>
                <Route path='/xxx' component={xxx}/>
                <Route path='/xxx' component={xxx}/> */}
            </Route>
    </Router>
)

ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
