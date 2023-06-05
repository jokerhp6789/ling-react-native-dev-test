import { StatusBar } from "expo-status-bar";
import { connect, Provider } from "react-redux";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import store from "./src/store/store";

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <HomeScreen />
                <StatusBar style="auto" />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingHorizontal: 16,
    },
});
