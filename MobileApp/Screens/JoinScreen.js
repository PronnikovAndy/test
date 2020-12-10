import React from "react";
import {
    View,
    Button,
    TextInput,
    Image,
    Platform,
    KeyboardAvoidingView
}   from "react-native"; 

export default function JoinScreen(){ 
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image 
                resizeMode="contain"
                style={{ flex: 1 }}
                source={require("../assets/note.png")}
            />
            <View style={{ flex: 1 }}>
                <TextInput placeholder="Enter username" />
                <Button title="Join Chat" />
            </View>
            {Platform.OS === "ios" && <KeyboardAvoidingView behavior="padding" />}
        </View>
    );
}