import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'


const contactsMenuButtons = [{
  type: "starred",
  name: "Starred",
},
{
  type: "contacts",
  name: 'Rubi',
  photo: require("../assets/Rubi.jpeg")
},
{
  type: "contacts",
  name: 'Raja',
  photo: require("../assets/Raja.jpeg")
},
{
  type: "contacts",
  name: 'Neha',
  photo: require("../assets/neha.jpeg")
},
{
  type: "contacts",
  name: 'Ganesh',
  photo: require("../assets/Ganesh.jpeg")
},


]

const Contacts = () => {
  return (
    <ScrollView style={styles.container}>
      
        {contactsMenuButtons.map((contact, index) =>


          <View key={index} style={styles.row}>
            {/* image */}
            {contact.type == "starred" ? (
              <View style={styles.starredIcon}>
                <AntDesign name="star" size={30} color="#f5c" />

              </View>) :
              (
                <Image source={contact.photo} style={styles.image} />
              )
            }

            {/* Text */}


            <Text style={styles.txt}>{contact.name}</Text>
          </View>
        )}
      
    </ScrollView>
  )
}

export default Contacts;

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    padding: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  starredIcon: {
    backgroundColor: '#e1e1e1',
    padding: 10,
    borderRadius: 20,

  },
  txt: {
    fontSize: 20,
    paddingLeft: 10,

  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 15,
  }

})