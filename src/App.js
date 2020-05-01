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
import Header from './Header.js';
import Footer from './Footer.js';


export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
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
                <Footer />
        </div>
        )
    }
}