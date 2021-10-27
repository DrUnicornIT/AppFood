import React from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Touchable
} from "react-native"

import {HeaderTabs} from '../components'

const Home = () => {
    return(
        <SafeAreaView>
            <HeaderTabs/>
        </SafeAreaView>
    )
}

export default Home;