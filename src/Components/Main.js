import React from 'react';

class Main extends React.Component {
  render() {
    return (
      this.props.profiles.map((profile, i) => (
        <div className="col s12 m6" key={profile.id}>
          <div className="card blue-grey darken-1">
            <div className="card-image">
              <img src={`https://unsplash.it/1000/60${i}`} alt={profile.name} />
              <span className="card-title">{profile.name}</span>
              <a href="#!" className="btn-floating halfway-fab waves-effect waves-light amber accent-4"><i className="material-icons">visibility</i></a>
            </div>
            <div className="card-content white-text">
              <p><strong>{profile.username}</strong></p>
              <p>{profile.email}</p>
              <p>{profile.phone}</p>
            </div>
            <div className="card-action">
              <a href="#!">View {profile.name.split(' ')[0]}'s profile</a>
            </div>
          </div>
        </div>
      ))
    )
  }
}

export default Main;