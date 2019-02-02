import React from 'react';
import Card from '../components/Card';

class Main extends React.Component {
  render() {
    return (
      <ul className="collection collection with-header">
        <li className="collection-header"><h4>User profiles</h4></li>
          <div className="row">
            {this.props.profiles.map((profile, i) => (
              <Card profile={profile} i={i} key={i} />
            ))}
          </div>
        </ul>
    )
  }
}

export default Main;