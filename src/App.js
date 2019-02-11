import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from './scenes/Main';
import SingleProfile from './scenes/SingleProfile';
import * as profileActions from './actions/profileActions';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchProfiles();
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col s10 offset-s1">
                
              <BrowserRouter>
                <React.Fragment>
                  <Route exact path="/" render={() => <Main {...this.props} />} />
                  <Route path="/profile/:username/:profileId" render={() => <SingleProfile {...this.props} />} />
                </React.Fragment>
              </BrowserRouter>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ profiles }) => ({ profiles })

const mapDispatchToProps = (dispatch) => bindActionCreators(profileActions, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App);
