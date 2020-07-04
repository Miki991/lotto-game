import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import { setAllNumbers } from './store/actionTypes';
import PropTypes from 'prop-types';

import Homepage from './pages/Homepage/Homepage';
import Error from './pages/Error/Error';


const App = (props) => {
  const { setAllNumbers } = props;

  useEffect(() => {
    // Setting all numbers available for Lotto game as soon as application is loaded
    let arr = [];
    for (let i = 1; i < 50; i++) {
      arr.push(i);
    }

    setAllNumbers(arr);
  }, [setAllNumbers]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' component={Homepage} exact />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setAllNumbers: (allNumbers) => dispatch({
      type: setAllNumbers, 
      allNumbers
    })
  }
}

App.propTypes = {
  setAllNumbers: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
