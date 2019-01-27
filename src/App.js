import React, { Component } from 'react';
import { connect } from 'react-redux';
import Main from './Components/Main';
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
              <ul className="collection collection with-header">
                <li className="collection-header"><h4>User profiles</h4></li>
                <div className="row">
                
                <Main {...this.props} />

                </div>
              </ul>
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
