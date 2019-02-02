import React from 'react';
import { Link } from 'react-router-dom';
import { formatName } from '../functions/formatters';

const Card = ({ profile, i }) => {
  const { id, name, username, email, phone } = profile;

  return (
    <div className="col s12 m6" key={id}>
      <div className="card blue-grey darken-1">

        <div className="card-image">
          <img src={`https://unsplash.it/1000/60${i}`} alt={name} />
          <span className="card-title">{name}</span>
          <Link to={`/profile/${username}/${i}`} className="btn-floating halfway-fab waves-effect waves-light amber accent-4">
            <i className="material-icons">visibility</i>
          </Link>
        </div>

        <div className="card-content white-text"> 
          <p><strong>{username}</strong></p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>

        <div className="card-action">
          <Link to={`/profile/${username}/${i}`}>View {formatName(name)}'s profile</Link>
        </div>

      </div>
    </div>
  )
}

export default Card;