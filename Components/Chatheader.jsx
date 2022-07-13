import {Pressable, View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';

const Chatheader = ({ setModalVisible}) => {
  return (
    <View style={styles.container}>
        <Pressable
            onPress={() => setModalVisible(false)}
            >
            <Text style={styles.buttonText} >Close</Text>
            </Pressable>

            <Text style={styles.heading}>V Chat</Text>
            <Entypo name="bell" size={40} color="#db075b" />

    </View>
  )
}

export default Chatheader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 20,
        paddingHorizontal: 10,

    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        borderColor: '#fff',
        //borderWidth: 1,
        padding: 10,
        borderRadius: 30,
        backgroundColor: '#7d1b42',

    },
    heading: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold',
        backgroundColor:'#047434',
        width:200,
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
    }
})