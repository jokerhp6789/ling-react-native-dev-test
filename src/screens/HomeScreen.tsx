import React from "react";
import { View, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../components/button/Button";

export interface IHomeScreenProps {
    [key: string]: any;
}

const HomeScreen: React.FC<IHomeScreenProps> = ({ id }) => {
    const renderSearchView = () => {
        return (
            <View style={{ flexDirection: "row", marginBottom: 100 }}>
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
                            padding: 8,
                        }}
                    />
                </View>
                <Button style={{ marginLeft: 8 }}>Search</Button>
            </View>
        );
    };

    return (
        <View
            style={{
                flex: 1,
                paddingTop: 100,
                justifyContent: "center",
            }}
        >
            {renderSearchView()}
        </View>
    );
};

export default HomeScreen;
