import {  View, FlatList } from 'react-native';
import categories from "../data/categories.json";
import CategoryItem from './CategoryItem';
import React from 'react';


function Categories()  {
    return (
        <View>
            <FlatList
                data={categories}
                renderItem= {({item}) => <CategoryItem category= {item} /> }
                keyExtractor={(category) => category}
            />
        </View>
    )
}

export default Categories
