import React, { useContext } from "react";
import { FlatList, View, Text } from "react-native";
import Button from "../../components/button/Button";
import { AppContext } from "../../context/app.context";
import { IUser } from "../../interface/user";

export interface IResultScreenProps {
    [key: string]: any;
}

export interface IResultItemProps {
    user: IUser;
}

const ResultScreen: React.FC<IResultScreenProps> = ({ id }) => {
    const { listResult, reset } = useContext(AppContext);

    const renderItem = (item: IUser) => {
        return <ResultItem user={item} />;
    };

    const tableHeader = () => {
        return (
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingVertical: 8,
                }}
            >
                <View style={{ flex: 2 }}>
                    <Text>Name</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: "center" }}>Rank</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: "center" }}>
                        Number of bananas
                    </Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: "center" }}>
                        Is Searched User ?
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", marginTop: 100 }}>
                <Button
                    onPress={() => {
                        reset();
                    }}
                >
                    Back
                </Button>
            </View>
            {tableHeader()}
            <FlatList
                style={{ flex: 1 }}
                data={listResult}
                renderItem={({ item, index }) => {
                    return renderItem(item);
                }}
            />
        </View>
    );
};

export default ResultScreen;

const ResultItem: React.FC<IResultItemProps> = ({ user }) => {
    const { name, order, bananas, isSearched } = user || {};

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 8,
            }}
        >
            <View style={{ flex: 2 }}>
                <Text>{name}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: "center" }}>{order}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: "center" }}>{bananas}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: "center" }} numberOfLines={2}>
                    {isSearched ? "Yes" : "No"}
                </Text>
            </View>
        </View>
    );
};
