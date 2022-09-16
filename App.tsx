import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export function Button() {
    return (
        <TouchableOpacity>
            <Text>Send</Text>
        </TouchableOpacity>
    );
}

export default function App() {
    return (
        <View style={styles.container}>
            <Text>Hello React Native!</Text>

            <Button />

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
