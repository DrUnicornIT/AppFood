import React from 'react'
import {
    View,
    Text,
    Image, 
    TouchableOpacity,
    Touchable
} from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

export const localRestaurants = [
    {
      name: "Restaurant 1",
      image_url:
        "https://list.vn/wp-content/uploads/2020/12/a1a8429.jpg",
      categories: ["Cafe", "Bar"],
      price: "999$",
      reviews: 1244,
      rating: 4.9,
    },
    {
      name: "Restaurant 2",
      image_url:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      categories: ["Cafe", "Bar"],
      price: "888$",
      reviews: 1244,
      rating: 4.8,
    },
    {
      name: "Restaurant 3",
      image_url:
        "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
      categories: ["Indian", "Bar"],
      price: "666$",
      reviews: 700,
      rating: 4.7,
    },
  ];

export default function RestaurantsList(props) {
    return(
        <View>
            {props.restaurants.map((restaurant, index) => (
                <TouchableOpacity activeOpacity={0.8} 
                    key={index}
                    style={{
                        marginBottom: 30,
                    }}
                >
                    
                    <View
                        
                        style={{
                            backgroundColor: "white",
                            marginTop: 10,
                            padding: 15,
                            borderRadius: 15,
                        }}
                    >
                        <RestaurantsItem image_url={restaurant.image_url}/>
                        <RestaurantsText name={restaurant.name} price={restaurant.price} rating={restaurant.rating}/>
                    </View>
                </TouchableOpacity>
            ))}
    </View>
    )
}

const RestaurantsItem = (props) => (
    <View>
        <Image
            source={{
                uri: props.image_url
            }}
            style={{
                width: "100%",
                height: 180
            }}
        />
        <TouchableOpacity 
            style={{
                position: 'absolute',
                right: 20,
                top: 20
            }}
        >
            <MaterialCommunityIcons 
                name="heart-outline"
                size={25}
                color="white"
            />
        </TouchableOpacity>
    </View>
);

const RestaurantsText = (props) => (
    <View
        style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            alignItems: "center"
        }}
    >
        <View>
            <Text 
                style={{
                    fontSize: 15,
                    fontWeight: "bold"
                }}
            >
                {props.name}
            </Text>
            <Text
                style={{
                    fontSize: 13,
                    color: "gray"
                }}
            >
                Price: {props.price}
            </Text>
        </View>
        <View
            style={{
                backgroundColor: "#eee",
                height: 30,
                width: 30,
                alignItems: "center",
                borderRadius: 30,
                justifyContent: "center",
            }}
        >
            <Text>
                {props.rating}
            </Text>
        </View>
    </View>
)