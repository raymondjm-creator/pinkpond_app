
import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Linking } from 'react-native';

const MrConnecterQuotes = [
  "Usikate tamaa, maisha yana sura nyingi, kila siku ni fursa mpya.",
  "Wewe ni wa thamani kubwa, usikubali kuambiwa vinginevyo.",
  "Changamoto ni ngazi za mafanikio. Pambana na usonge mbele.",
  "Wakati mwingine ukinyamaza, Mungu anazungumza.",
  "Ukweli huponya moyo, uongo huumiza polepole.",
];

export default function ChatbotScreen() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (userInput.trim() === '') return;
    const reply = MrConnecterQuotes[Math.floor(Math.random() * MrConnecterQuotes.length)];
    setMessages([...messages, { from: 'user', text: userInput }, { from: 'bot', text: reply }]);
    setUserInput('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mr. Connecter</Text>
      <ScrollView style={styles.chatBox}>
        {messages.map((msg, index) => (
          <Text
            key={index}
            style={msg.from === 'user' ? styles.userMsg : styles.botMsg}
          >
            {msg.from === 'user' ? "You: " : "Mr. Connecter: "}{msg.text}
          </Text>
        ))}
      </ScrollView>
      <TextInput
        style={styles.input}
        placeholder="Type your message..."
        value={userInput}
        onChangeText={setUserInput}
      />
      <Button title="Send" onPress={sendMessage} color="#f50057" />
      <Text style={styles.helpText}>Need real help?</Text>
      <Button
        title="Talk to a Human"
        onPress={() => Linking.openURL('tel:+255762660329')}
        color="#880e4f"
      />
      <Text style={styles.numberText}>Customer Service: +255 762 660 329</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffe4f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#d81b60',
    textAlign: 'center',
  },
  chatBox: {
    flex: 1,
    marginBottom: 12,
  },
  userMsg: {
    textAlign: 'right',
    marginVertical: 4,
    color: '#333',
  },
  botMsg: {
    textAlign: 'left',
    marginVertical: 4,
    color: '#880e4f',
  },
  input: {
    borderWidth: 1,
    borderColor: '#f50057',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  helpText: {
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
    color: '#444',
  },
  numberText: {
    textAlign: 'center',
    color: '#444',
    marginTop: 6,
  },
});
