import React,{Dispatch, SetStateAction } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";

interface FormModal {
  currentStep: number;
  showSteps:any;
  show:boolean;
  onHide: Dispatch<SetStateAction<boolean>>;
}

const FormModal:React.FC<FormModal> = (props:FormModal) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Step {props.currentStep} of 2
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.showSteps}</Modal.Body>
    </Modal>
  );
};

export default FormModal;
