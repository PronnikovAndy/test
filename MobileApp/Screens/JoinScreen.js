import React from "react";
import { View, Button, TextInput, Image } from "react-native"; 

export default function JoinScreen(){ 
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            {/* <Image source={require("../assets/icon.png")} /> */}
            <TextInput placeholder="Enter username" />
            <Button title="Join Chat" />
        </View>
    );
}