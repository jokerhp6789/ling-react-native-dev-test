import React from "react";
import {
    StyleProp,
    TextInput,
    TextInputProps,
    View,
    ViewStyle,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { paddingMedium } from "../../style/app.size";
import Button from "../button/Button";

export interface IInputSearchProps {
    inputProps?: TextInputProps;
    style?: StyleProp<ViewStyle>;
    value?: TextInputProps["value"];
    onChangeText?: TextInputProps["onChangeText"];
    placeholder?: TextInputProps["placeholder"];
    onSearch?: (values: any) => any;
}

const InputSearch: React.FC<IInputSearchProps> = ({
    inputProps = {},
    style,
    value,
    placeholder,
    onChangeText,
    onSearch,
}) => {
    return (
        <View style={[{ flexDirection: "row" }, style]}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1,
                    borderWidth: 1,
                    borderRadius: 8,
                }}
            >
                <FontAwesome
                    name="search"
                    size={18}
                    color="black"
                    style={{ marginLeft: 8 }}
                />
                <TextInput
                    style={{
                        width: "100%",
                        padding: paddingMedium,
                    }}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    {...(inputProps || {})}
                />
            </View>
            <Button
                style={{ marginLeft: paddingMedium * 2 }}
                onPress={onSearch}
            >
                Search
            </Button>
        </View>
    );
};

export default InputSearch;
