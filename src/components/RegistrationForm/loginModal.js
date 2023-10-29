import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//import './login.css';
import Header from "./header";
import RegistrationForm from "./registration";

const LoginModal = (props) => { 
    return (
        <>
          <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
              <Modal.Header closeButton>
                 <Modal.Title>Login</Modal.Title>
                 <Header/>
              </Modal.Header>
              <Modal.Body>
                <RegistrationForm/>
              </Modal.Body>
              <Modal.Footer>
                 <Button variant="danger" onClick={props.handleModalOpen}>
                    Cancel
                 </Button>
              </Modal.Footer>
          </Modal>
        </>
     );
}

export default LoginModal;