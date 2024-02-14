import {Text, StyleSheet,  } from 'react-native';
import Card from './Card';
import React from 'react';


function CategoryItem({category})  {
    return (
    <>
        <Card style={{marginVertical: 20}} >
            <Text style={styles.text}>{category}</Text>
        </Card>
    </>
)
}

export default CategoryItem

const styles = StyleSheet.create({
    text: {
        fontSize: 25
    },
})