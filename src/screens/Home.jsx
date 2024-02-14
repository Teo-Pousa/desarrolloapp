import { View } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";
import React from 'react';

function Home (){
    return (
        <View style={{frex: 1}} >
            <Header title={"Martinesa"}/>
            <Categories />
        </View>
    );
}


export default Home;