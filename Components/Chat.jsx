import {KeyboardAvoidingView, View, Text,StyleSheet,Pressable,TextInput,TouchableOpacity,TouchableWithoutFeedback,Keyboard } from 'react-native'
import React, {useState} from 'react'
import Chatheader from '../Components/Chatheader'
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Chat = ({setModalVisible}) => {
     const [ messageText , setMessageText] = useState()



  return (
    <View style={styles.container}>
       
       {/* keyboard avoiding view used show content during typing or usin keyboard */}
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={{flex:1}}
        >

            {/* Touchablewithoutfeedbabck is used to minimize keyboarb by taping anywhere on sch=reen  */}
       <TouchableWithoutFeedback onPress={ Keyboard.dismiss} >
           <View style={{flex:1}}>

        <Chatheader setModalVisible={setModalVisible} />
     
     {/* chat messages  section */}
      <View style={styles.chatmessages}>
 
      </View>
 
      {/* type Messages form  */}
      <View style={styles.chatformcontainer}>
    <Text style={{color:'white'}}>Send to Everyone </Text>
      <View style={styles.chatform}>
          <TextInput 
          value ={messageText}
          onChangeText={text => setMessageText(text)}
          style={styles.chatforminput} 
          placeholderTextColor= '#595859'
          placeholder="Tap to chat" 
          />
 
          <TouchableOpacity 
          style={{
              ...styles.sendbutton,
              backgroundColor: messageText ?  "#047434" : "#373838"  ,
         }}
         >
             <FontAwesome name="send" size={25} color="#ffff" />
          </TouchableOpacity>
 
      </View>
      </View>
        </View>
        </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      
    </View>
  )
}

export default Chat;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#020112',

    },
    chatformcontainer: {
        borderColor: 'white',
        borderTopWidth: 1,
        padding: 12,
    },
    chatform: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    chatforminput: {
        flex: 1,
        height: 40,
        color: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginTop: 12,   
    },
    sendbutton: {
        height: 40,
        width: 40,
        marginTop: 12,
        marginLeft: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    chatmessages: {
        flex: 1,
    }

})