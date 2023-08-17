import React from "react";
import { TextInput, Button, Text, View } from "react-native";

export default function LoginForm() {
    return (
        <View>
            <TextInput placeholder="Emailo"/>
            <TextInput placeholder="Password"/>
            <Button title="LogIn" onPress={() => console.log('Entrandoooooooooooo')}/>
        </View>
    )
}