import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading';
import TopNav from './TopNav';
import HomeP from './HomeP';
import QuestionP from './QuestionP';
import AddQuestionP from './AddQuestionP';
import LoginP from './LoginP';
import LeaderboardP from './LeaderboardP';

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData());
  }

  render () {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {this.props.userLoggedIn === true
            ? <div className="container">
                <TopNav />
                <Route path='/' exact component={HomeP} />
                <Route path='/add' component={AddQuestionP} />
                <Route path='/leaderboard' component={LeaderboardP} />
                <Route path='/questions/:id' component={QuestionP} />
              </div>
            : <LoginP />
          }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({ authUser }) {
  return {
    userLoggedIn: authUser !== null,
  }
}

export default connect(mapStateToProps)(App);
