import React from 'react';

class ProfileEntry extends React.Component {
  state = {
    editing: false,
    fieldVal: ''
  }

  inputRef = React.createRef();

  componentDidMount() {
    this.setState({ fieldVal: this.props.profile[1] })
  }

  toggleEditing = () => this.setState({ editing: !this.state.editing })

  updateField = (fieldName) => {
    const { updateProfile, profileId } = this.props;
    const { editing, fieldVal } = this.state;

    if (editing) {
      updateProfile(profileId, fieldName, fieldVal);
    }

    return null;
  }

  handleChange = (fieldVal) => this.setState({ fieldVal })

  render() {
    const { profile, index, hasObj } = this.props;
    
    return (
      <li className="collection-item avatar">
        <img src={`https://unsplash.it/1000/60${index}`} alt="" className="circle" />
        <span className="title"><strong>{profile[0]}</strong></span>

        {!this.state.editing ? (
          <React.Fragment>
            {hasObj ? Object.entries(profile[1]).map((item, index) => {
                if (typeof item[1] === 'string') {
                  return (
                    <p key={`profile-entry-${index}`} onClick={this.toggleEditing}>
                      <strong className="capitalise">{item[0]}</strong>: 
                      {item[1]}
                    </p>
                  )
                }

                return null;
              }) 
            : <p key={`profile-entry-${index}`} onClick={this.toggleEditing}>{profile[1]}</p>}
          </React.Fragment>
        ) : (
          <React.Fragment>
          {hasObj ? Object.entries(profile[1]).map((item, index) => {
            if (typeof item[1] === 'string') {
              return (
                <div key={`profile-entry-${index}`}>
                  <p><strong className="capitalise">{item[0]}</strong>:</p> 
                  <input 
                    onChange={(e) => this.handleChange(e.target.value)}
                    onKeyUp={(e) => {
                      if (e.keyCode === 13)  {
                        this.updateField(profile[0]);
                        this.toggleEditing();
                      };
                    }}
                    ref={this.inputRef} 
                    type="text" 
                    value={this.state.fieldVal} 
                    autoFocus
                  />
                </div>
              )
            }

            return null;
          }) : <input 
                  onChange={(e) => this.handleChange(e.target.value)} 
                  onKeyUp={(e) => {
                      if (e.keyCode === 13)  {
                        this.updateField(profile[0]);
                        this.toggleEditing();
                      };
                    }}
                  key={`profile-entry-${index}`} 
                  ref={this.inputRef} 
                  type="text" 
                  value={this.state.fieldVal}
                  autoFocus
                />}
          </React.Fragment>
        )}

        {profile[0] !== 'id' && 
          <span 
            onClick={() => {
              this.toggleEditing();
              this.updateField(profile[0]);
            }} 
            className={`profileEntry__fab btn-floating halfway-fab waves-effect waves-light 
              ${!this.state.editing ? 'amber accent-4' : 'teal accent-3'}`}
            >
            <i className="material-icons">{!this.state.editing ? 'edit' : 'check'}</i>
          </span>
        }
      </li>
    )
  }
}

export default ProfileEntry;