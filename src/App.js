import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from './scenes/Main';
import SingleProfile from './scenes/SingleProfile';
import { fetchProfiles } from './actions/postActions';
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
                  <Route path="/profile/:username/:index" render={() => <SingleProfile {...this.props} />} />
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

const mapDispatchToProps = (fetchProfiles) => ({ fetchProfiles })

export default connect(
  mapStateToProps, 
  mapDispatchToProps(fetchProfiles)
)(App);
