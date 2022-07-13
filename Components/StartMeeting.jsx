import { View, Text,StyleSheet ,TextInput,Button,TouchableOpacity} from 'react-native'
import React from 'react'
//import { TouchableOpacity } from 'react-native-gesture-handler'

function StartMeeting({name, roomId, setName, setRoomId, joinRoom}) {
  return (
    <View style={styles.container}>
      

      <View style={styles.startMeetingContainer}>
        <View style={styles.info}>
          <TextInput style={styles.textInput} 
           value={name}
           placeholder="Enter your name"
           placeholderTextColor={'#7d8282'}

           onChangeText={(text) => setName(text)}
           />
          </View>
     
          <View style={styles.info}>
           <TextInput style={styles.textInput} 
           value={roomId}
           placeholder="Enter Room ID"
           placeholderTextColor={'#7d8282'}

           onChangeText={(text) => setRoomId(text)}
           />

        </View>
        <View>
        <TouchableOpacity 
      onPress={()=>joinRoom() } 
      style={styles.startMeetingButton}
      >
      <Text style={{fontSize:30,alignSelf:'center'}}> Start</Text>
      </TouchableOpacity>
        </View>

      </View>
      
    </View>
  )
}

export default StartMeeting;

const styles = StyleSheet.create({
  info: {
    width: '100%',
    backgroundColor:'#020112',
    height:'auto',
    
  },
textInput: {
  borderWidth: 1,
  borderColor: '#000',
  backgroundColor: '#fff',
  padding: 7,
  width: '90%',
  alignItems: 'center',
  alignSelf: 'center', 
  marginTop: 10,
  borderRadius: 10, 
  fontSize: 20,
  color: 'blue',
  marginBottom: 10,
},
startMeetingButton: {
  backgroundColor: '#0494c4',
  width:'30%',
  height: 50,
  alignSelf: 'center',
  justifyContent: 'center',
  fontSize: 20,
  fontWeight: 'bold',
  borderRadius: 15,
  marginTop: 5,
},
container: {
  flex: 1,
  backgroundColor: '#020112',

},
startMeetingContainer: {
  backgroundColor: '#020112',
}

})