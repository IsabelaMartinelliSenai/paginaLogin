//IMPORT PAGES
import Home from './src/pages/Home';
import Login from './src/pages/Login';

//IMPORT NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//IMPORT ICONS
import AntDesign from '@expo/vector-icons/AntDesign';
import { ImageBackground } from 'react-native';
import { styles } from './src/styles/styles';

const Drawer = createDrawerNavigator()

export default function App() {
  const img = require("./src/img/sunrise-mountain_157744-1480.jpg")
  return (
    <ImageBackground source={img} resizeMode="cover" style={styles.img}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName='Login'
          screenOptions={{
            headerTitle: "",
            drawerStyle: {
              backgroundColor: "#85A7BB",
              elevation: 0,
              shadowOpacity: 0,
            },
            drawerActiveBackgroundColor: "#d8bab8",
            drawerActiveTintColor: "#85a7bb",
            drawerInactiveBackgroundColor: "#85a7bb",
            drawerInactiveTintColor: "#d8bab8",
          }} >
          <Drawer.Screen name='Login' component={Login}
            options={{
              drawerIcon: ({ color, size }) => {
                return <AntDesign name="login" size={size} color={color} />
              },
              headerShown: false
            }}
          />
          <Drawer.Screen name='Home' component={Home}
            options={{
              drawerIcon: ({ color, size }) => {
                return <AntDesign name="home" size={size} color={color} />
              },
              headerShown: false
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </ImageBackground>
  );
}
