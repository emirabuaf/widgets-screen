import App from "./App";
import Enzyme, { shallow, mount } from "enzyme";
import {
  render,
  fireEvent,
  screen,
  queryAllByText,
  getByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import AddWidget from "./components/AddWidget";
import MultiStepForm from "./components/MultiStepForm";
import Step1 from "./components/MultiStepForm/Step1";
import Step2 from "./components/MultiStepForm/Step2";
import WidgetsList from "./components/WidgetsList";

// setup enzyme react adapter
Enzyme.configure({ adapter: new Adapter() });

const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

const setIsVisible = jest.fn();
const nextStep = jest.fn();
const updateData = jest.fn();

const multiStepProps = {
  nextStep,
};

const appProps = {
  updateData,
};

test("The main page should be a widgets overview list.", () => {
  const wrapper = shallow(<App />);
  const widgetComponent = findByTestAttr(wrapper, "component-widgets");
  const multistepComponent = findByTestAttr(wrapper, "component-multistep");
  expect(widgetComponent.length).toEqual(1);
  expect(multistepComponent.length).toEqual(0);
});

describe("multi-step wizard", () => {
  test("Add widget button takes to a multi-step wizard", () => {
    const wrapper = shallow(<AddWidget setIsVisible={setIsVisible} />);
    //   find the button
    const addWidget = findByTestAttr(wrapper, "component-addwidget");
    //  click the button
    addWidget.simulate("click");
    expect(setIsVisible).toHaveBeenCalled();
    // find the display
    const newWrapper = shallow(<MultiStepForm />);
    const newAddWidget = findByTestAttr(newWrapper, "component-addwidget");
    expect(newAddWidget.length).toBe(0);
  });

  test("First step is Select language", () => {
    const wrapper = shallow(<Step1 />);
    const step1Component = findByTestAttr(wrapper, "component-language");
    expect(step1Component.length).toBe(1);
  });
  test("Next button take to the second step", () => {
    const wrapper = mount(<Step1 {...multiStepProps} />);
    const nextButtonComponent = findByTestAttr(
      wrapper,
      "component-next-button"
    );
    nextButtonComponent.simulate("click");
    expect(nextStep).toHaveBeenCalledTimes(1);
  });
  test("Second step is Enter name", () => {
    const wrapper = shallow(<Step2 />);
    const step2Component = findByTestAttr(wrapper, "component-name");
    expect(step2Component.length).toBe(1);
  });
  test("Create button adds new widget and then takes back to overview on success.", () => {
    // add new widget
    const finishStep = jest.fn();
    const { getByTestId } = render(<Step2 finishStep={finishStep} />);
    let newWidget = { name: "dummy", language: "dummy" };
    fireEvent.change(getByTestId("newInputValue"), {
      target: { value: newWidget },
    });
    const finishButton = screen.getByText("Finish");
    expect(finishButton).toBeInTheDocument();
    fireEvent.click(finishButton);
    expect(finishStep).toHaveBeenCalledTimes(1);
    // finish button not visible
  });
});

describe("The deleting widget asks confirmation with a modal window.", () => {
  test("no data available", () => {
    render(<WidgetsList formData={[]} />);
    expect(screen.getByText(/No data available/)).toBeInTheDocument();
  });

  test("data available", () => {
    const mockedFormDataProp = [{ name: "dummy", language: "dummy" }];
    render(<WidgetsList formData={mockedFormDataProp} />);

    fireEvent.click(screen.queryByText(/Delete/));
    const modalComponent = document.querySelector(".modal-dialog");

    expect(modalComponent).toBeTruthy();
  });
});
