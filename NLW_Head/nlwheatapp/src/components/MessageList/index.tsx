import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

import {
  ScrollView,
  Text,
  View
} from 'react-native';
import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';
import { api } from '../../services/api';
import { MotiView } from '@motify/components';

export type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

let messageQueue: Message[] = []

const socket = io(String(api.defaults.baseURL))

socket.on('new_message', (newMessage) => {
  messageQueue.push(newMessage)
})

export function MessageList() {
  const [currentMessages, setCurrentMessages] = useState<Message[]>([])

  useEffect(() => {
    async function fetchMessage() {
      const messageResponse = await api.get<Message[]>('/messages/last3')
      setCurrentMessages(messageResponse.data)
    }

    fetchMessage()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if(messageQueue.length > 0){
        setCurrentMessages(prevState => [messageQueue[0], prevState[0], prevState[1]])
        messageQueue.shift()
      }
    }, 3000)

    return () => clearInterval(timer)
  },[])

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="never"
    >
      {currentMessages.map((message) =>
        <MotiView
          from={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ type: 'timing', duration: 700 }}
          style={styles.container}
          key={message.id}
        >
          <Text style={styles.messageContent}>
            {message.text}
          </Text>
          <View style={styles.user}>
            <UserPhoto
              imageUri={message.user.avatar_url}
              sizes="SMALL"
            />
            <Text style={styles.userName}>
              {message.user.name}
            </Text>
          </View>
        </MotiView>
      )}

    </ScrollView>
  );
}