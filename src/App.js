import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    // Link,
    // useParams
} from 'react-router-dom';
import DetailPage from './DetailsPage.js';
import SearchPage from './SearchPage.js';
import './App.css';


export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                        <Route 
                            path="/pokemon/:name" 
                            // exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}