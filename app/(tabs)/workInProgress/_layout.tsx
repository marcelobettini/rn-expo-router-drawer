import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function Settings_Layout() {
    return (
        <Tabs screenOptions={{
            headerShown: false
        }} />
    )
}

const styles = StyleSheet.create({})