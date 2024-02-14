import { View, Text, StyleSheet } from 'react-native';
import {colors} from "../global/colors";
import React from 'react';


function Header({title})  {
    return (
    <View style={styles.container} >
        <Text style={styles.text}>{title} </Text>
    </View>
)
}

export default Header

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.green_1,
        width: "100%",
        paddingVertical: 8 
    },
    text:{
        fontSize: 30, 
        color:"white",
        textAlign:"center",
        fontWeight:"bold"
    }
});