import './App.css';
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {PrivateRoute} from './components/PrivateRoute';
import Nav from './components/common/Nav';
import Sidebar from './components/common/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Fragment>
            <Router>
                <Nav/>
                <div className="main-container page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <Switch>
                                <PrivateRoute path='/product'>
                                    Product Page
                                </PrivateRoute>

                                <PrivateRoute path='/users'>
                                    Users List Page
                                </PrivateRoute>

                                <Route exact path='/'>
                                    Home Page
                                </Route>

                                <Route exact path='/login'>
                                    Login Page
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </Router>
        </Fragment>
    );
}

export default App;
