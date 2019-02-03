import React from 'react';
import { withRouter } from 'react-router-dom';
import ProfileEntry from '../components/ProfileEntry';

class SingleProfile extends React.Component {
  headerRef = React.createRef();

  componentDidMount() {
    this.headerRef.current.scrollIntoView({
      block: 'center',
      inline: 'center',
    });
  }

  renderProfile = (profiles, postId) => {
    if (profiles.length) {
      return (
        <ul className="collection">
          {Object.entries(profiles[postId]).map((profile, index) => 
            <ProfileEntry 
              key={index} 
              index={index} 
              profile={profile} 
              postId={postId} 
              hasObj={typeof profile[1] === 'object'} 
              updateProfile={this.props.updateProfile} 
            />
          )}
        </ul>
      )
    }

    return <p>Loading...</p>;
  }


  render() {
    const { location, profiles } = this.props;
    const [ postId ] = [ location.pathname.split('/')[3] ]

    return (
      <React.Fragment>
        <header ref={this.headerRef} className="header-single" style={{background: `url(https://unsplash.it/1000/60${postId})`}}></header>
        <div className="row">
          <div className="col s12 m10 offset-m1">
            <h3>{profiles.length && profiles[postId].name}</h3>
            <ul>
              {this.renderProfile(profiles, postId)}
            </ul>
            <span className="waves-effect waves-light btn-large red lighten-1">
              <i className="material-icons right">delete_forever</i>
              Delete account
            </span>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(SingleProfile);