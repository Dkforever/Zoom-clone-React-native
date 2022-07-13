import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

const Searchbar = () => {
  return (
    <View style={styles.container}>
        <Entypo name="magnifying-glass" size={30} color="black" />
      <Text style={{fontSize:20}}>Search</Text>
    </View>
  )
}

export default Searchbar;

const styles = StyleSheet.create({
    container: {
        padding:5,
        marginLeft:10,
        marginRight:10,
        borderWidth:1,
        borderRadius:10,
        flexDirection:'row',
        backgroundColor:'#bababa',
        alignItems:'center',

    }
})