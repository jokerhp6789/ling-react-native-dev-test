import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleProp,
    ViewStyle,
    TextStyle,
    TouchableOpacityProps,
} from "react-native";
import { themeColor } from "../../style/app-color";

export interface IButtonProps extends TouchableOpacityProps {
    children?: any;
    style?: StyleProp<ViewStyle>;
    styleText?: StyleProp<TextStyle>;
}

const Button: React.FC<IButtonProps> = ({
    children,
    style = {},
    styleText,
    ...rest
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
            {...rest}
        >
            {children && <Text style={[styleText]}>{children}</Text>}
        </TouchableOpacity>
    );
};

export default Button;
