import { View, Text, Button, Image } from 'react-native'
import React from 'react'
import SquareOptionMenu from '../components/SquareOptionMenu'
import images from '../assets/images'

export default function HomeScreen(props) {

  console.log('props: ',props);

  const { navigation } = props

  const goToSettings = () =>{
    navigation.navigate("Settings")
  }

  return (
    <View>
      <Image source={images.logoInventariosPNG}/>
      <SquareOptionMenu/>
      <Button title='Ir a Ajustes' onPress={goToSettings}/>
    </View>
  )
}