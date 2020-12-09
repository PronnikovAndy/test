import React, {useEffect, useState, useRef} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import io from "socket.io-client";
import { GiftedChat } from 'react-native-gifted-chat'

export default function HomeScreen() {
  const [messageToSend, setMessageToSend] = useState("");
  const [recvMessages, setRecvMessages] = useState([]);
  const socket = useRef(null);

  useEffect(() => {
    socket.current = io("http://127.0.0.1:3001");
    socket.current.on("message", message => {
      const testMessage = {
        _id: 3,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        }
      };
      testMessage.text = message;
      setRecvMessages(prevState => GiftedChat.append(prevState, testMessage));
    });
      setRecvMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        }
      },
        {
          _id: 2,
          text: 'Hello from me',
          createdAt: new Date(),
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          }
        }
    ]);
  }, []);

  const onSend = messages => {
    console.log(messages);
    socket.current.emit("message", messages[0].text);
  };

  return (
      <GiftedChat
        messages={recvMessages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
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