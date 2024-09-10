import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Page() {
    return (
        <View style={styles.container}>
            <Text>FOTOS DE OBRAS TERMINADAS</Text>
            <Text>FOTO 1</Text>
            <Text>FOTO 2</Text>
            <Text>FOTO 3</Text>
            <Text>FOTO 4</Text>
            <Text>FOTO 5</Text>
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