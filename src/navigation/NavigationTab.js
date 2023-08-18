import { View, Text, Image, Button, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import images from '../assets/images';

const Tab = createBottomTabNavigator()

const PokeIcon = ({ onPress }) => (
  <TouchableWithoutFeedback
    onPress={onPress}
    style={{
      position: 'absolute',
      alignSelf: 'center',
    }}
  >
    <Image
      source={images.logoCircularInventarios}
      style={{
        width: 90,
        height: 90,
        bottom: 15
      }}
    />
  </TouchableWithoutFeedback>
);

export default function NavigationTab() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Homer" component={HomeScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({color,size})=>(
            <MaterialIcons name='settings' color={'transparent'} size={size}/>
          ),
          headerShown: false
        }}/>

        <Tab.Screen name='Home' component={HomeScreen} 
          options={({navigation})=>({
            tabBarLabel: '',
            tabBarIcon: () => (
              <PokeIcon onPress={() => navigation.navigate('Home')}/>
            ),
            headerShown: false
          })}
        />
        
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarLabel: '',
          tabBarIcon: ({color,size})=>(
            <MaterialIcons name='settings' color={'transparent'} size={size}/>
          )
        }}/>
    </Tab.Navigator>
  )
}