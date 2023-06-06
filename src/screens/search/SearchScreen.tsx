import React, { useContext, useState } from "react";
import {
    View,
    TextInput,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Button from "../../components/button/Button";
import { useRef } from "react";
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
                            padding: paddingMedium,
                        }}
                        placeholder="User name..."
                        onChangeText={(text) => setInputRef(text)}
                        value={inputRef}
                    />
                </View>
                <Button
                    style={{ marginLeft: 8 }}
                    onPress={() => {
                        if (inputRef) {
                            setSearchInput(inputRef.trim());
                            setInputRef(null);
                        }
                    }}
                >
                    Search
                </Button>
            </View>
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
