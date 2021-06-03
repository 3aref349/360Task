
import React from 'react';

import './App.css';


import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import posts from './components/posts/posts';
import createpost from "./components/posts/createPost"
import Edit from './components/posts/EditPost';



function App() {


  return (
    <div>

      <div>
        <Router>
          <nav>
            <ul role="nav" className="Nav">
              <>
                <li><a ><Link to="/">Posts</Link></a></li>

                <li><a ><Link to="/createpost">Add Post</Link></a></li>

              </>

            </ul>
          </nav>

          <div className="App">

            <Switch>

              <Route component={posts} path="/" exact />
              <Route component={createpost} path="/createpost" exact />

              <Route component={Edit} path="/edit/:id" exact />
            </Switch>



          </div>

        </Router>

      </div>

    </div>


  );
}

export default App;
