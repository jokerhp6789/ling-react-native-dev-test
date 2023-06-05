import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleProp,
    ViewStyle,
    TextStyle,
} from "react-native";
import { themeColor } from "../../style/app-color";

export interface IButtonProps {
    children?: any;
    style?: StyleProp<ViewStyle>;
    styleText?: StyleProp<TextStyle>;
}

const Button: React.FC<IButtonProps> = ({
    children,
    style = {},
    styleText,
}) => {
    return (
        <TouchableOpacity
            style={[
                {
                    justifyContent: "center",
                    alignItems: "center",
                    height: 40,
                    paddingHorizontal: 12,
                    backgroundColor: themeColor,
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: themeColor,
                },
                style,
            ]}
        >
            {children && <Text style={[styleText]}>{children}</Text>}
        </TouchableOpacity>
    );
};

export default Button;
