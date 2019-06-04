import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from "./Views/Home";
import ProductDetails from "./Views/ProductDetails";
import Navbar from './shared/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/productDetails/:id" component={ProductDetails} />
            <Route path="/" component={Home} exact />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
