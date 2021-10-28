import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Touchable,
    ScrollViewBase
} from "react-native"

import {HeaderTabs, SearchBar, Categories} from '../components';
const Home = () => {
    return(
        <SafeAreaView 
            style={{
                backgroundColor: "#eee",
                flex: 1
            }}
        >
            <View 
                style={{
                    backgroundColor: "white",
                    padding: 15
                }}
            >
                <HeaderTabs/>
                <SearchBar/>
            </View>
            <View>
                <Categories/>
            </View>
        </SafeAreaView>
    )
}

export default Home;