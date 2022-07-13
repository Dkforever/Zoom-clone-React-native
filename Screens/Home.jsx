import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

import Searchbar from '../Components/Searchbar'
import Contacts from '../Components/Contacts'
import Header from '../Components/Header'
import Menubuttons from '../Components/Menubuttons'

const Home = ({navigation}) => { 
 return(
   
    <View style={styles.container}>
     <Header />
     <Searchbar />
     <Menubuttons navigation={navigation} />
     <Contacts />
     
     </View>
  )


}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        backgroundColor:'#bababa',
        flex:1,
    }
})

export default Home;