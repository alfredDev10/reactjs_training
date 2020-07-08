import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import TodoList from './TodoList';
import Welcome from './Welcome';

function App() {
    return (
        <Router>
            <Link to="/todos">Go to my todos!</Link>
            <Route path="/" exact component={Welcome}></Route>
            <Route path="/todos" component={TodoList}></Route>
        </Router>
    );
}

export default App;
