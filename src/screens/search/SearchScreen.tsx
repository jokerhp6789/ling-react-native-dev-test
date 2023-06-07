import { FontAwesome } from "@expo/vector-icons";
import React, { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../components/button/Button";
import InputSearch from "../../components/input/InputSearch";
import { AppContext } from "../../context/app.context";
import {
    paddingBase,
    paddingLargeX,
    paddingMedium,
    SCREEN_WIDTH,
} from "../../style/app.size";

export interface ISearchScreenProps {
    [key: string]: any;
}

const SearchScreen: React.FC<ISearchScreenProps> = ({ id }) => {
    const { setSearchInput, searchHistory } = useContext(AppContext);
    const [inputRef, setInputRef] = useState<string>("");

    const renderSearchView = () => {
        return (
            <InputSearch
                style={{ marginBottom: 100 }}
                placeholder="User name..."
                onChangeText={(text) => setInputRef(text)}
                value={inputRef}
                onSearch={() => {
                    if (inputRef) {
                        setSearchInput(inputRef.trim());
                        setInputRef(null);
                    }
                }}
            />
        );
    };

    const renderHistory = () => {
        if (!(searchHistory?.length > 0)) {
            return null;
        }
        return (
            <View
                style={{
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: 1,
                    backgroundColor: "rgba(68, 68, 69, 0.1)",
                    padding: 1,
                }}
            >
                {searchHistory.map((search, index) => (
                    <TouchableOpacity
                        onPress={() => {
                            setInputRef(search);
                        }}
                        activeOpacity={0.8}
                        style={{
                            padding: paddingBase,
                            backgroundColor: "white",
                            width:
                                (SCREEN_WIDTH -
                                    2 * paddingLargeX -
                                    paddingBase) /
                                3,
                        }}
                        key={`${index}_${search}`}
                    >
                        <Text>{search}</Text>
                    </TouchableOpacity>
                ))}
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
            {renderHistory()}
        </View>
    );
};

export default SearchScreen;
