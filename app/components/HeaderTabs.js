import React, {useState} from 'react';
import {
    View,
    Text,
    Touchable,
    TouchableOpacity
} from "react-native";
export default function HeaderTabs() {
    const [ActiveTab, setActiveTab] = useState("FOOD");
    return(
        <View style = {{
            flexDirection: "row", 
            alignSelf: "center"
        }}>
            <Headerbuttoms 
                text="MAP" 
                bgrColor="black" 
                textColor="white" 
                ActiveTab={ActiveTab} 
                setActiveTab={setActiveTab}
            />
            <Headerbuttoms 
                text="FOOD" 
                bgrColor="white" 
                textColor="black" 
                ActiveTab={ActiveTab} 
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

const Headerbuttoms = (props) => (
    <View>
        <TouchableOpacity
            style = {{
                backgroundColor: props.ActiveTab === props.text ? "black" : "white",
                paddingVertical: 6,
                paddingHorizontal: 16, 
                borderRadius: 30
            }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text 
                style={{
                    color: props.ActiveTab === props.text ? "white" : "black", 
                    fontSize: 15, 
                    fontWeight: "900",
                }}
            > 
                {props.text} 
            </Text>
        </TouchableOpacity>
    </View>
);