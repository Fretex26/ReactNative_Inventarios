import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SettingsScreen(props) {

  const {navigation} = props

  const goToHome = () => {
    navigation.navigate("Home")
  }

  return (
    <View>
      <Text style={{
        fontSize: 56,
        textAlign: 'center',
      }}>Hola IDI</Text>
      <Button title='Ir a Home' onPress={goToHome}/>
    </View>
  )
}

const styles = StyleSheet.create({})