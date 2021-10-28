import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Touchable,
    ScrollView
} from "react-native"

import {HeaderTabs, SearchBar, Categories, RestaurantsList} from '../components';
import { localRestaurants } from '../components/RestaurantsList';

// const YELP_API_KEY = 

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
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories/>
                <RestaurantsList restaurants={localRestaurants}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;