import React, { useState } from "react";
import styles from "./styles.css";
import ModalForm from "../Modal";

const WidgetsList = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDeleteWidget = (index) => {
    props.formData.splice(index, 1);
    const newList = props.formData.filter((item) => item.index !== index);
    props.setFormData(newList);
    localStorage.setItem("newValue", JSON.stringify(props.formData));
    setModalVisible(false);
  };

  const toggleVisible = (index) => {
    setModalVisible(!modalVisible);
    setSelectedItem(index);
  };

  return (
    <div>
      {props.formData.length !== 0 ? (
        props.formData.map((widget, index) => (
          <div className="widget-wrapper" key={index}>
            <div className="name-language">
              <p>Name:{widget.name}</p>
              <p>Language:{widget.language}</p>
            </div>
            <button
              onClick={() => toggleVisible(index)}
              type="button"
              className="delete-button"
              data-test="component-delete"
            >
              Delete
            </button>
            {selectedItem == index ? (
              modalVisible == true ? (
                <ModalForm
                  data-test="component-modal"
                  toggleVisible={toggleVisible}
                  onClick={() => handleDeleteWidget(index)}
                />
              ) : null
            ) : null}
          </div>
        ))
      ) : (
        <div>
          <p className="no-data">No data available</p>
        </div>
      )}
    </div>
  );
};

export default WidgetsList;
