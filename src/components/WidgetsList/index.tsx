import React, { useState, Dispatch, SetStateAction } from "react";
import "./styles.css";
import ModalForm from "../Modal";
import DeleteWidget from "../DeleteWidget";
import { IData } from '../../App'

interface ListProps {
  formData: IData[];
  setFormData: Dispatch<SetStateAction<IData[]>>;
}



const WidgetsList:React.FC<ListProps> = (props:ListProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleDeleteWidget = (index:number) => {
    props.formData.splice(index, 1);
    const newList = props.formData.filter((item:any) => item.index !== index);
    props.setFormData(newList);
    localStorage.setItem("newValue", JSON.stringify(props.formData));
    setModalVisible(false);
  };

  const toggleVisible = (index:any) => {
    setModalVisible(!modalVisible);
    setSelectedItem(index);
  };

  return (
    <div>
      {props.formData.length !== 0 ? (
        props.formData.map((widget, index) => (
          <div className="widget-wrapper" key={index}>
            <div className="name-language">
              <p>Name: {widget.name}</p>
              <p>Language: {widget.language}</p>
            </div>
            <DeleteWidget onClick={() => toggleVisible(index)} />

            {selectedItem == index ? (
              modalVisible == true ? (
                <ModalForm
                  toggleVisible={toggleVisible}
                  onClick={() => handleDeleteWidget(index)}
                />
              ) : null
            ) : null}
          </div>
        ))
      ) : (
        <div>
          <p data-testid="component-nodata" className="no-data">
            No data available
          </p>
        </div>
      )}
    </div>
  );
};

export default WidgetsList;
