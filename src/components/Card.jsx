import { StyleSheet, View } from 'react-native';
import React from 'react';

const Card = ({children, style}) => {
return (
    <View style={{...styles.container, ...style}} >
        {children}
    </View>
    )
};

export default Card

const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
            shadowOpacity: 0.43,
            shadowRadius: 9.51,
            elevation: 15,
    }
})