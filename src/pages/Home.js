import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// IMPORT STYLES
import { styles } from "../styles/styles";

import { useNavigation } from '@react-navigation/native';

import AntDesign from "@expo/vector-icons/AntDesign"
import Feather from '@expo/vector-icons/Feather';

export default function Home() {
  const navigation = useNavigation()
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
      <Text style={{
        textAlign: 'center',
        color: "#618baf",
        fontSize: 50,
      }}>PÁGINA HOME</Text>
    </View>
  );
}
