import React, { Dispatch, SetStateAction } from "react";
import WidgetsList from "../WidgetsList";
import AddWidget from "../AddWidget";
import { IData } from '../../App'
import "./styles.css";


export interface Props {
  setIsVisible: Dispatch<SetStateAction<boolean>>;
  formData: IData[];
  setFormData: Dispatch<SetStateAction<IData[]>>;
}

const Widgets:React.FC<Props> = (props:Props) => {
  return (
    <div className="container">
      <h1 className="header">Widgets</h1>
      <WidgetsList setFormData={props.setFormData} formData={props.formData} />
      <AddWidget setIsVisible={props.setIsVisible} />
    </div>
  );
};

export default Widgets;
