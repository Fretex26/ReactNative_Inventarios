import { View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar, Image } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Novedades',
    image: require('./../assets/images/Novedades.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Consultas',
    image: require('./../assets/images/Consultas.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-1ye671e29d72',
    title: 'Cargue de Mercancía',
    image: require('./../assets/images/CargueDeMercancia.png')
  },
  {
    id: '58mdga0f-3da1-471f-bd96-145571e29d72',
    title: 'Administración',
    image: require('./../assets/images/Administracion.png')
  },
  {
    id: '58694a0f-3365-471f-bd96-145571e29d72',
    title: 'Historial',
    image: require('./../assets/images/Historial.png')
  },
  {
    id: '58694a0f-3365-471f-bd96-145551e29d72',
    title: 'Cerrar Sesión',
    image: require('./../assets/images/CerrarSesion.png')
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Image source={item.image } style={[styles.optionIcon]}/>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function SquareOptionMenu(props) {

  const {navigation} = props

  const goToHome = () => {
    navigation.navigate("Home")
  }

  const goToSettings = () =>{
    navigation.navigate("Settings")
  }

  const [selectedId, setSelectedId] = useState();

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#f22f29' : '#f2f2f2';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          props.onPress()
        }}
        backgroundColor={backgroundColor}
        textColor={color}
        color={color}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginLeft: 36
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
  },
  optionIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  }
});