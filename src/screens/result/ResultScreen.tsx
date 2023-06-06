import React, { useContext } from "react";
import { FlatList, View, Text } from "react-native";
import Button from "../../components/button/Button";
import { AppContext } from "../../context/app.context";
import { IUser } from "../../interface/user";

const tableColor = "green";
const cellColor = "white";

export interface IResultScreenProps {
    [key: string]: any;
}

export interface IResultItemProps {
    user: IUser;
    isLast?: boolean;
}

export interface ITableRowProps {
    content: IUser;
}

const ResultScreen: React.FC<IResultScreenProps> = ({ id }) => {
    const { listResult, reset } = useContext(AppContext);

    const renderItem = (item: IUser, index?: number) => {
        const isLast = index === listResult?.length - 1;
        return <ResultItem user={item} isLast={isLast} />;
    };

    const tableHeader = () => {
        return (
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "stretch",
                    paddingTop: 1,
                    paddingHorizontal: 1,
                    gap: 1,
                    backgroundColor: tableColor,
                    // borderWidth: 0.2,
                }}
            >
                <View
                    style={{
                        flex: 2,
                        backgroundColor: cellColor,
                        paddingLeft: 4,
                    }}
                >
                    <Text style={{}}>Name</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: cellColor }}>
                    <Text style={{ textAlign: "center" }}>Rank</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: cellColor }}>
                    <Text style={{ textAlign: "center" }}>
                        Number of bananas
                    </Text>
                </View>
                <View style={{ flex: 1, backgroundColor: cellColor }}>
                    <Text style={{ textAlign: "center" }} numberOfLines={2}>
                        Is Searched User ?
                    </Text>
                </View>
            </View>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    flexDirection: "row",
                    marginTop: 100,
                    marginBottom: 16,
                    justifyContent: "flex-end",
                }}
            >
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
                    return renderItem(item, index);
                }}
            />
        </View>
    );
};

export default ResultScreen;

const ResultItem: React.FC<IResultItemProps> = ({ user, isLast }) => {
    const { name, order, bananas, isSearched } = user || {};

    return (
        <View
            style={{
                flexDirection: "row",
                alignItems: "center",
                paddingTop: 1,
                paddingBottom: isLast ? 1 : 0,
                paddingHorizontal: 1,
                gap: 1,
                backgroundColor: tableColor,
            }}
        >
            <View
                style={{ flex: 2, backgroundColor: cellColor, paddingLeft: 4 }}
            >
                <Text
                    style={{
                        color: isSearched ? "red" : "black",
                        paddingVertical: 8,
                    }}
                >
                    {name}
                </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: cellColor }}>
                <Text
                    style={{
                        textAlign: "center",
                        color: isSearched ? "red" : "black",
                        paddingVertical: 8,
                    }}
                >
                    {order}
                </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: cellColor }}>
                <Text
                    style={{
                        textAlign: "center",
                        color: isSearched ? "red" : "black",
                        paddingVertical: 8,
                    }}
                >
                    {bananas}
                </Text>
            </View>
            <View style={{ flex: 1, backgroundColor: cellColor }}>
                <Text
                    style={{
                        textAlign: "center",
                        color: isSearched ? "red" : "black",
                        paddingVertical: 8,
                    }}
                >
                    {isSearched ? "Yes" : "No"}
                </Text>
            </View>
        </View>
    );
};
