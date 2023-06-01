import React from "react"
import { View, Text } from "react-native"
import styles from "./styles.js"

export default function CurrentPrice(){
    return(
        <View style={styles.headerPrice}>
            <Text style={styles.currentPrice}>$ 5400.300</Text>
            <Text style={styles.textPrice}>Última Cotação</Text>
        </View>
    )
}