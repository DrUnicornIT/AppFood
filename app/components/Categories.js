import React from 'react'
import {
    View,
    Text,
    Image,
    ScrollView
} from "react-native"
const items = [
    {
        image: require("../assets/images/shopping-bag.png"),
        text: "Pick up"
    },
    {
        image: require("../assets/images/soft-drink.png"),
        text: "Soft drink"
    },
    {
        image: require("../assets/images/bread.png"),
        text: "Bread"
    },
    {
        image: require("../assets/images/fast-food.png"),
        text: "Fast food"
    },
    {
        image: require("../assets/images/deals.png"),
        text: "Deals"
    },
    {
        image: require("../assets/images/coffee.png"),
        text: "Coffee & Tea"
    },
    {
        image: require("../assets/images/desserts.png"),
        text: "Desserts"
    },
]

export default function Categories() {
    return(
        <Category
            marginRight={30}
        />
    )
}
const Category = (props) => (
    <View
        style={{
            marginTop: 5,
            backgroundColor: "white",
            paddingVertical: 10,
            paddingLeft: 20
        }}
    >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {/**Looop */}
            {items.map((item, index) => (
                <View key={index} style={{
                    alignItems: "center",
                    marginRight: props.marginRight
                }}>
                    <Image 
                        source={item.image}
                        style={{
                            width: 50,
                            height: 40,
                            resizeMode: "center"
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 15,
                            fontWeight: "900"
                        }}
                    >{item.text}</Text>
                </View>
            ))}
                
        </ScrollView>
        </View>
)