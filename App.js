import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useFonts} from "expo-font";
import {assets, COLORS} from "./constants";
import {Image, Text, View} from "react-native";
// Screens
// expo r -c
import CarsListView from "./screens/CarsListView";
import CarDetails from "./screens/CarDetails";
import Profile from "./screens/Profile";
import Menu from "./screens/Menu";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const theme = {
    ...DefaultTheme, colors: {
        ...DefaultTheme.colors, background: 'transparent'
    }
}

const carsListView = 'CarsListView'
const carDetails = 'CarDetails'
const profile = 'Profile'
const menu = 'Menu'
const overView = 'OverView'
const profileScreen = 'ProfileScreen'

const OverView = props => {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={carsListView}>
            <Stack.Screen name={carsListView} component={CarsListView}/>
            <Stack.Screen name={carDetails} component={CarDetails}/>
        </Stack.Navigator>
    )
};
const ProfileScreen = props => {
    return (
        <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={profile}>
            <Stack.Screen name={profile} component={Profile}/>
        </Stack.Navigator>
    )
};

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
                initialRouteName={profileScreen}
                screenOptions={
                    ({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;
                            let useImage = false;
                            let route_name = route.name;
                            if (route_name === overView) {
                                iconName = focused ? 'home' : 'home-outline'
                            } else if (route_name === menu) {
                                iconName = focused ? 'list' : 'list-outline'
                            } else if (route_name === profileScreen) {
                                useImage = true
                                iconName = assets.person03
                            }
                            if(!useImage) {
                                return <Ionicons name={iconName} size={size} color={color}/>
                            }
                            return <Image source={iconName} style={{width:50,height:50}}/>
                        },
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarActiveTintColor: COLORS.accent,
                        tabBarInactiveTintColor: 'grey',
                        tabBarItemStyle: {paddingBottom: 10, fontSize: 10},
                        tabBarStyle: {padding: 10, height: 50,},
                        tabBarHideOnKeyboard: true,
                    })}>
                <Tab.Screen name={overView} component={OverView}/>
                <Tab.Screen name={profileScreen} component={ProfileScreen}/>
                <Tab.Screen name={menu} component={Menu}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
};


export default App;