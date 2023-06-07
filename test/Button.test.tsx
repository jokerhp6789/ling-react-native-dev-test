import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Enzyme, { shallow } from "enzyme";
import Button, { IButtonProps } from "../src/components/button/Button";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {
    const mockProps: IButtonProps = {
        onPress: jest.fn(),
        style: {},
        styleText: {},
    };

    it("renders without crashing", () => {
        shallow(<Button {...mockProps} />);
    });

    it("renders children correctly", () => {
        const wrapper = shallow(<Button {...mockProps}>Click me</Button>);
        expect(wrapper.find(Text).children().text()).toBe("Click me");
    });

    it("calls onPress when pressed", () => {
        const onPress = jest.fn();
        const wrapper = shallow(<Button {...mockProps} onPress={onPress} />);
        wrapper.find(TouchableOpacity).simulate("press");
        expect(onPress).toHaveBeenCalled();
    });

    it("applies custom styles correctly", () => {
        const customStyle = { backgroundColor: "red" };
        const wrapper = shallow(<Button {...mockProps} style={customStyle} />);
        expect(wrapper.prop("style")).toContain(customStyle);
    });

    it("applies custom text styles correctly", () => {
        const customTextStyle = { color: "blue" };
        const wrapper = shallow(
            <Button {...mockProps} styleText={customTextStyle}>
                Click me
            </Button>
        );
        expect(wrapper.find(Text).prop("style")).toContain(customTextStyle);
    });
});
