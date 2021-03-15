import React, { Dispatch, SetStateAction } from "react";
import "./styles.css";

interface AddWidgetProps {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}

const AddWidget:React.FC<AddWidgetProps> = (props:AddWidgetProps) => {
  const toggleVisible = () => {
    props.setIsVisible(true);
  };

  return (
    <div>
      <button
        data-test="component-addwidget"
        className="add-widget"
        onClick={toggleVisible}
      >
        Add Widget
      </button>
    </div>
  );
};

export default AddWidget;
