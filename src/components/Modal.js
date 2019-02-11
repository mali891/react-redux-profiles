import React from 'react';
import { formatName } from '../functions/formatters';

const Modal = ({ name, toggleModal, deleteProfile }) => (
  <div className="modal--overlay fade-in" onClick={toggleModal}>
    <div className="modal">
      <div className="modal-content">
        <h4>Are you sure you want to delete {formatName(name)}'s account?</h4>
        <p>This action cannot be reversed.</p>
      </div>
      <div className="modal-footer">
        <button onClick={toggleModal} className="modal-close waves-effect waves-green btn-flat">Cancel</button>
        <button onClick={deleteProfile} className="waves-effect waves-light btn-large red lighten-1">
          <i className="material-icons right">delete_forever</i>
          Delete account
        </button>
      </div>
    </div>
  </div>
)

export default Modal;