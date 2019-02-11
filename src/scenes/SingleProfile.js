import React from 'react';
import { withRouter } from 'react-router-dom';
import ProfileEntry from '../components/ProfileEntry';
import Modal from '../components/Modal';

class SingleProfile extends React.Component {
  headerRef = React.createRef();

  state = {
    modalOpen: false
  }

  componentDidMount() {
    this.headerRef.current.scrollIntoView({
      block: 'center',
      inline: 'center',
    });
  }

  renderProfile = (profiles, profileId) => {
    if (profiles.length) {
      return (
        <ul className="collection">
          {Object.entries(profiles[profileId]).map((profile, index) => 
            <ProfileEntry 
              key={index} 
              index={index} 
              profile={profile} 
              profileId={profileId} 
              hasObj={typeof profile[1] === 'object'} 
              updateProfile={this.props.updateProfile} 
            />
          )}
        </ul>
      )
    }

    return <p>Loading...</p>;
  }

  toggleModal = () => this.setState({ modalOpen: !this.state.modalOpen })

  deleteProfile = (profileId) => {
    this.props.history.push('/');
    this.props.deleteProfile(parseInt(profileId))
  }


  render() {
    const { location, profiles } = this.props;
    const profileId = location.pathname.split('/')[3]

    return (
      <React.Fragment>
        <header ref={this.headerRef} className="header-single" style={{background: `url(https://unsplash.it/1000/60${profileId})`}}></header>
        <div className="row">
          <div className="col s12 m10 offset-m1">
            <h3>{profiles.length && profiles[profileId].name}</h3>
            <ul>
              {this.renderProfile(profiles, profileId)}
            </ul>
            <button onClick={this.toggleModal} className="waves-effect waves-light btn-large red lighten-1">
              <i className="material-icons right">delete_forever</i>
              Delete account
            </button>
          </div>
        </div>
        {profiles && profiles[profileId] && this.state.modalOpen &&
          <Modal name={profiles[profileId].name} toggleModal={this.toggleModal} deleteProfile={() => this.deleteProfile(profileId)} />
        }
      </React.Fragment>
    )
  }
}

export default withRouter(SingleProfile);