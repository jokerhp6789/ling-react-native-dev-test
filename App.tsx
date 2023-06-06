import { StatusBar } from "expo-status-bar";
import { sortBy, reverse, find, unionBy } from "lodash";
import { useEffect, useMemo, useState } from "react";
import {
    AccessibilityInfo,
    Alert,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    View,
} from "react-native";
import { AppContext } from "./src/context/app.context";
import { IUser } from "./src/interface/user";
import ResultScreen from "./src/screens/result/ResultScreen";
import SearchScreen from "./src/screens/search/SearchScreen";
import * as users from "./src/data/users.json";

export default function App() {
    const data = useMemo<IUser[]>(() => {
        const arr: any[] = [];
        if (users) {
            Object.keys(users).forEach((key) => {
                const user = users?.[key];
                if (user && key !== "default") {
                    arr.push(user);
                }
            });
        }
        const shorted = sortBy(arr, (i) => i?.bananas);
        const reversed = reverse(shorted);
        const addOrder = reversed.map((item, index) => ({
            ...item,
            order: index + 1,
        }));
        return addOrder;
    }, [users]);

    const tops = useMemo(() => {
        const clone = [...data];
        clone.length = 10;
        return clone;
    }, [data]);

    const [searchInput, setSearchInput] = useState<string>(null);
    const [searchHistory, setSearchHistory] = useState([]);
    const [listResult, setListResult] = useState<IUser[]>();

    useEffect(() => {
        if (searchInput) {
            const history = unionBy(
                [searchInput, ...(searchHistory || [])].filter((i) => !!i),
                (i) => i
            );
            if (history?.length > 12) {
                history.length = 12;
            }
            setSearchHistory(history);
            loadData();
        }
    }, [searchInput]);

    const loadData = () => {
        const foundUser = find(data, (item) => {
            return item?.name?.indexOf(searchInput) !== -1;
        });
        if (foundUser) {
            const topIds = tops.map((user) => user?.uid);
            foundUser.isSearched = true;
            if (topIds.includes(foundUser?.uid)) {
                setListResult(
                    tops.map((top) =>
                        top?.uid === foundUser ? foundUser : top
                    )
                );
            } else {
                const clones = [...tops];
                clones.splice(9, 1, foundUser);
                setListResult(clones);
            }
        } else {
            Alert.alert(
                "Error",
                "This user name does not exist! Please specify an existing user name!"
            );
        }
    };

    const reset = () => {
        setListResult([]);
        setSearchInput(null);
    };

    return (
        <AppContext.Provider
            value={{
                searchInput,
                setSearchInput,
                searchHistory,
                setSearchHistory,
                listResult,
                setListResult,
                reset,
            }}
        >
            <KeyboardAvoidingView
                style={styles.container}
                enabled={!AccessibilityInfo.isReduceMotionEnabled()}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
                {listResult?.length > 0 ? <ResultScreen /> : <SearchScreen />}
                <StatusBar style="auto" />
            </KeyboardAvoidingView>
        </AppContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Dimensions.get("window").height,
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingHorizontal: 16,
    },
});
