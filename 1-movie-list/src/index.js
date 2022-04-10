
import React from 'react';
import ReactDOM from 'react-dom';
import List from './containers/List';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    // return <h1>Movie world</h1>;

    return(
        <div className="container-fluid mt-5">
            <nav className="navbar sticky-top navbar-light bg-dark">
                <h1 className="navbar-brand text-light p-2">The SHOW</h1>
            </nav>
            <List />
        </div>

        );
};

ReactDOM.render(<App />, document.getElementById("root"));