import { View, Text, Image, Button, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

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
      source={require('./../assets/pokeball.png')}
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
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'yondu',
          tabBarIcon: ({color,size})=>(
            <MaterialIcons name='settings' color={color} size={size}/>
          )
        }}/>

        <Tab.Screen name='settings' component={SettingsScreen} 
          options={({navigation})=>({
            tabBarLabel: '',
            tabBarIcon: () => (
              <PokeIcon onPress={() => navigation.navigate('settings')}/>
            )
          })}
        />
        
        <Tab.Screen name="Settings" component={SettingsScreen} options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color,size})=>(
            <MaterialIcons name='settings' color={color} size={size}/>
          )
        }}/>
    </Tab.Navigator>
  )
}