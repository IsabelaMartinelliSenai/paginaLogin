//IMPORT PAGES
import Home from './src/pages/Home';
import Login from './src/pages/Login';

//IMPORT NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//IMPORT ICONS
import AntDesign from '@expo/vector-icons/AntDesign';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
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
  );
}
