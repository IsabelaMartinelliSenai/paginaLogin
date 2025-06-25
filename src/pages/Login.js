import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, TouchableOpacity, ImageBackground, View } from 'react-native';

// IMPORT STYLES
import { styles } from "../styles/styles";

import { useNavigation } from '@react-navigation/native';

import AntDesign from "@expo/vector-icons/AntDesign"
import Feather from '@expo/vector-icons/Feather';
import { useState } from 'react';

export default function Login() {
  // const img = require("../img/sunrise-mountain_157744-1480.jpg")

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
    <ImageBackground style={styles.img} source={require("../img/bgPage.jpg")}>
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
          left: 20,
        }}
        onPress={() => navigation.openDrawer()}
      >
        <Feather name="menu" size={24} color="#d8bab8" />
      </TouchableOpacity>
      <Text style={{
        color: "#85a7bb",
        fontSize: 37,
        textAlign: 'center',
        marginBottom: 60
      }}>PÁGINA DE LOGIN</Text>
      <TextInput
        style={styles.input}
        placeholder='Digite seu E-mail'
        placeholderTextColor={'#f6d8c7'}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder='Digite sua senha'
        placeholderTextColor={'#f6d8c7'}
        onChangeText={setSenha}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={Login} style={{
        width: 160,
        height: 50,
        borderRadius: 20,
        backgroundColor: "#d8bab8",
        justifyContent: "center",
        alignItems: 'center',
        margin: 20,
      }}>
        <Text style={{
          color: '#fff3ed',
          fontSize: 25
        }}>L O G I N</Text>
      </TouchableOpacity>
      <StatusBar hidden />
    </ImageBackground>
  );
}
