import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import PlayScreen from '../screens/PlayScreen';
import BookScreen from '../screens/BookScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {NavigationContainer} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import VenueInfoScreen from '../screens/VenueInfoScreen';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import PasswordScreen from '../screens/PasswordScreen';
import NameScreen from '../screens/NameScreen';
import SelectImgScreen from '../screens/SelectImgScreen';
import PreFinalScreen from '../screens/PreFinalScreen';
import {AuthContext} from '../AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useContext} from 'react';
import CreateActivity from '../screens/CreateActivity';
import TagVenueScreen from '../screens/TagVenueScreen';
import SelectTimeScreen from '../screens/SelectTimeScreen';
import GameSetUpScreen from '../screens/GameSetUpScreen';
import PlayersScreen from '../screens/PlayersScreen';
import ProfileDetailScreen from '../screens/ProfileDetailScreen';
import ManageRequests from '../screens/ManageRequests';
import SlotScreen from '../screens/SlotScreen';
import PaymentScreen from '../screens/PaymentScreen';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const {isLoading, token} = useContext(AuthContext);
  function ButtonTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="HOME"
          component={HomeScreen}
          options={{
            tabBarActiveTintColor: 'green',
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons name="home-outline" size={30} color="green" />
              ) : (
                <Ionicons name="home-outline" size={30} color="#989898" />
              ),
          }}
        />
        <Tab.Screen
          name="PLAY"
          component={PlayScreen}
          options={{
            tabBarActiveTintColor: 'green',
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <AntDesign name="addusergroup" size={24} color="green" />
              ) : (
                <AntDesign name="addusergroup" size={24} color="#989898" />
              ),
          }}
        />
        <Tab.Screen
          name="BOOK"
          component={BookScreen}
          options={{
            tabBarActiveTintColor: 'green',
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <SimpleLineIcons name="book-open" size={24} color="green" />
              ) : (
                <SimpleLineIcons name="book-open" size={24} color="#989898" />
              ),
          }}
        />
        <Tab.Screen
          name="PROFILE"
          component={ProfileScreen}
          options={{
            tabBarActiveTintColor: 'green',
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Ionicons name="person-outline" size={24} color="green" />
              ) : (
                <Ionicons name="person-outline" size={24} color="#989898" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  const AuthStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Password"
          component={PasswordScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Name"
          component={NameScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Image"
          component={SelectImgScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PreFinal"
          component={PreFinalScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  function MainStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={ButtonTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Venue"
          component={VenueInfoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Create"
          component={CreateActivity}
          options={{headerShown: false}}
          initialParams={{
            sport: '',
            area: '',
            date: '',
            timeInterval: '', // Ensure this is correctly set
            noOfPlayers: 0,
            game: '', // Add default value for game
          }}
        />
        <Stack.Screen
          name="TagVenue"
          component={TagVenueScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Time" component={SelectTimeScreen} />
        <Stack.Screen
          name="Game"
          component={GameSetUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Players"
          component={PlayersScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Manage"
          component={ManageRequests}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Slot"
          component={SlotScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileDetail"
          component={ProfileDetailScreen}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {token === null || token === '' ? <AuthStack /> : <MainStack />}
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
