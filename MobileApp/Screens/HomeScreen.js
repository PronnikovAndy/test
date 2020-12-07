
// import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import io from "socket.io-client";

export default function HomeScreen() {
  const [messageToSend, setMessageToSend] = useState("");
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://127.0.0.1:3001");
  }, []);

  const sendMessaging = () => {
    socket.current.emit("message", messageToSend);
  };

  return (
    <View style={styles.container}>
      <Text>Hello React Native!</Text>
      <TextInput
        value={messageToSend}
        onChangeText= {text => setMessageToSend(text)}
        placeholder="enter chat message..."
        onSubmitEditing={sendMessaging}
        />
        
        {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
