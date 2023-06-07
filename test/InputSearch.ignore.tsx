import React from "react";
import { TextInput } from "react-native";
import { shallow } from "enzyme";
import InputSearch, {
    IInputSearchProps,
} from "../src/components/input/InputSearch";
import Button from "../src/components/button/Button";

describe("InputSearch", () => {
    const mockProps: IInputSearchProps = {
        inputProps: {},
        style: {},
        value: "",
        placeholder: "Search...",
        onChangeText: jest.fn(),
        onSearch: jest.fn(),
    };

    it("renders without crashing", () => {
        shallow(<InputSearch {...mockProps} />);
    });

    it("renders a TextInput component with the correct props", () => {
        const wrapper = shallow(<InputSearch {...mockProps} />);
        const textInput = wrapper.find(TextInput);
        expect(textInput.exists()).toBe(true);
        expect(textInput.prop("placeholder")).toBe(mockProps.placeholder);
        expect(textInput.prop("onChangeText")).toBe(mockProps.onChangeText);
        expect(textInput.prop("value")).toBe(mockProps.value);
    });

    it("renders a Button component with the correct props", () => {
        const wrapper = shallow(<InputSearch {...mockProps} />);
        const button = wrapper.find(Button);
        expect(button.exists()).toBe(true);
        expect(button.prop("onPress")).toBe(mockProps.onSearch);
    });

    it("calls onChangeText when TextInput value changes", () => {
        const onChangeText = jest.fn();
        const wrapper = shallow(
            <InputSearch {...mockProps} onChangeText={onChangeText} />
        );
        const textInput = wrapper.find(TextInput);
        const newValue = "new value";
        textInput.simulate("changeText", newValue);
        expect(onChangeText).toHaveBeenCalledWith(newValue);
    });

    it("calls onSearch when Button is pressed", () => {
        const onSearch = jest.fn();
        const wrapper = shallow(
            <InputSearch {...mockProps} onSearch={onSearch} />
        );
        const button = wrapper.find(Button);
        button.simulate("press");
        expect(onSearch).toHaveBeenCalled();
    });
});
