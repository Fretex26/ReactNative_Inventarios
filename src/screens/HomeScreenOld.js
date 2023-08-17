import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {

  console.log('props: ',props);

  const { navigation } = props

  const goToSettings = () =>{
    navigation.navigate("Settings")
  }

  return (
    <View>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Button title='Ir a Ajustes' onPress={goToSettings}/>
    </View>
  )
}