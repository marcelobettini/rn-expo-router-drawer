import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Page() {
    return (
        <View style={styles.container}>
            <Text>user/[id] route</Text>
            <Text>DETAIL SCREEN</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})