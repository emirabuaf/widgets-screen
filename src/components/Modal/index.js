import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ModalForm = (props) => {
  return (
    <Modal show={true}>
      <Modal.Body>Are you sure want to delete?</Modal.Body>
      <Modal.Footer>
        <Button onClick={props.toggleVisible} variant="danger">
          Cancel
        </Button>
        <Button onClick={props.onClick} variant="danger">
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
