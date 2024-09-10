import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function Page() {
    return (
        <>
            <Tabs.Screen options={{
                title: "wtf"
            }} />
            <View style={styles.container}>
                <Text>INFO DE OBRAS TERMINADAS</Text>
                <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi eligendi vitae sint dolor nobis, odio velit id asperiores distinctio, natus similique praesentium soluta eius ex enim ipsam dicta nam optio?</Text>
            </View>
        </>

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