import { View, Text, Button, Image, StyleSheet, SafeAreaView } from 'react-native'
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
    <SafeAreaView>
      <Image source={images.logoInventariosPNG} style={[styles.logo]}/>
      <SquareOptionMenu/>
      <Button title='Ir a Ajustes' onPress={goToSettings}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginLeft: 36,
    marginTop: 60,
    marginBottom: 10
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});