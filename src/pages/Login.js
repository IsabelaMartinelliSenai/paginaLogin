import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// IMPORT STYLES
import { styles } from "../styles/styles";

import { useNavigation } from '@react-navigation/native';

import AntDesign from "@expo/vector-icons/AntDesign"
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const navigation = useNavigation()

  const Login = () => {
    if (email === "isa@gmail.com" && senha === "12345") {
      navigation.navigate('Home', { userEmail: email })
    } else {
      alert("E-mail ou senha errados")
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          width: 48,
          height: 48,
          borderRadius: 48,
          backgroundColor: "#85a7bb",
          justifyContent: "center",
          alignItems: 'center',
          position: 'absolute',
          top: 20,
          left: 20
        }}
        onPress={() => navigation.openDrawer()}
      >
        <Feather name="menu" size={24} color="#d8bab8" />
      </TouchableOpacity>
      <Text>PÁGINA DE LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu E-mail'
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder='Digite sua senha'
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={Login} style={{
        width: 100,
        height: 30,
        borderRadius: 20,
        backgroundColor: "#d8bab8",
        justifyContent: "center",
        alignItems: 'center',
        margin: 20,
      }}>
        <Text style={{
          color: '#fff3ed',
        }}>L O G I N</Text>
      </TouchableOpacity>
    </View >
  );
}
