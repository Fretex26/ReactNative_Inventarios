import React from "react";
import { Text, ViewProps } from "react-native";

export default function Saludar (props: Props) {
    const {user} = props
    return(
        <Text>Hola {user}</Text>
    ) 
}

Saludar.defaultProps = {
    user: 'Nadie te quiere'
}

type Props = {
    user: number
}