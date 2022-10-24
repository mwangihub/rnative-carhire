import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from "react-native-vector-icons/Ionicons";
import {useFonts} from "expo-font";

// Screens
// expo r -c
import Home from "./screens/Home";
import CarDetails from "./screens/CarDetails";
import Profile from "./screens/Profile";


const theme = {
    ...DefaultTheme, colors:{
        ...DefaultTheme.colors, background: 'transparent'
    }
}
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const homeName = 'Home'
const carDetails = 'CarDetails'
const profile = 'Profile'
const App = () => {
    const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  if (!loaded) return null;
    return (
        <NavigationContainer theme={theme}>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={
                    ({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;
                            let route_name = route.name;
                            if (route_name === homeName) {
                                iconName = focused ? 'home' : 'home-outline'
                            } else if (route_name === carDetails) {
                                iconName = focused ? 'list' : 'list-outline'
                            } else if (route_name === profile) {
                                iconName = focused ? 'person' : 'person-outline'
                            }
                            return <Ionicons name={iconName} size={size} color={color}/>
                        },
                        headerShown: false,
                        tabBarActiveTintColor: '#446bf9',
                        tabBarInactiveTintColor: 'grey',
                        tabBarItemStyle: {paddingBottom: 10, fontSize: 10},
                        tabBarStyle: {padding: 10, height: 70,},
                        tabBarHideOnKeyboard: true,
                    })} >
                <Tab.Screen name={homeName} component={Home}/>
                <Tab.Screen name={carDetails} component={CarDetails}/>
                <Tab.Screen name={profile} component={Profile}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;