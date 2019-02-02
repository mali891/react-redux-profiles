import React from 'react';
import { withRouter } from 'react-router-dom';

class SingleProfile extends React.Component {
  renderProfile = (profiles, index) => {
    if (profiles.length) {
      return (
        Object.entries(this.props.profiles[index]).map(profile => (
          <li key={profile.id}>{`${profile[0]} - ${profile[1]}`}</li>
        ))
      )
    }

    return <p>Loading...</p>;
  }

  render() {
    const { location, profiles } = this.props;
    const [ username, index ] = [ 
      location.pathname.split('/')[2], 
      location.pathname.split('/')[3] 
    ]

    return (
      <ul className="collection collection with-header">
        <li className="collection-header">
          <h4>{profiles.length && profiles[index].name}</h4>
        </li>
        <div className="row">
          <div className="col s12 m6">
            <ul>
              {this.renderProfile(profiles, index)}
            </ul>
          </div>
        </div>
      </ul>
    )
  }
}

export default withRouter(SingleProfile);