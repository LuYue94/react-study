import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './react.scss';
import State from './children/State';
import Props from './children/Props';
import Events from './children/Events';
import Lifecycle from './children/Lifecycle';

console.log('ReactV');
class ReactV extends Component {
    render() {
        return (
            <Router>
                <div className="react">
                    <div className="top">
                        <ul>
                            <li>
                                <NavLink to="/react/State" exact>
                                    State
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/react/Props" exact>
                                    Props
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/react/Events" exact>
                                    Events
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/react/Lifecycle" exact>
                                    Lifecycle
                                </NavLink>
                            </li>
                            {/* <li><NavLink to="/redux">Redux</NavLink></li> */}
                        </ul>
                    </div>
                    <div className="bottom">
                        <Switch>
                            <Route path="/react/State" component={State} />
                            <Route path="/react/Props" component={Props} />
                            <Route path="/react/Events" component={Events} />
                            <Route path="/react/Lifecycle" component={Lifecycle} />
                            <Redirect path="/" to={{ pathname: '/react/State' }} />
                        </Switch>
                        {/* <Route  path="/redux" component={ReduxV} /> */}
                    </div>
                </div>
            </Router>
        );
    }
}

export default ReactV;
