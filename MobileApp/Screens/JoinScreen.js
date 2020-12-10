import React from "react";
import { View, Text, TextInput, Image } from "react-native"; 

export default function JoinScreen(){ 
    return {
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image source={require("../assets/icon.png")} />
            <TextInput placeholder="Enter username" />
        </View>
    };
}