import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'

const Header = () => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between',padding:10,alignItems:'center'}}>
    <Entypo name="notification" size={30} color="black" />
    <Text style={styles.headertext}>Meet & Chat</Text>
    <Entypo name="menu" size={30} color="black" />
    
    </View>
  )
}

export default Header;
const styles = StyleSheet.create({
    headertext:{
        fontSize:30,
        fontWeight:'bold',
        color:'black',
    }
})