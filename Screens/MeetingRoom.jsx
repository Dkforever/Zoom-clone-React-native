import { Modal, View, Text, StyleSheet, TextInput, Button, TouchableOpacity ,Alert} from 'react-native'
import React, { useState, useEffect } from 'react'
import StartMeeting from '../Components/StartMeeting'
import { io } from 'socket.io-client'
import { Camera } from 'expo-camera';
import FontAwsome from "react-native-vector-icons/FontAwesome";

import Chat from '../Components/Chat';


const menuIcons = [
  {
    id: 1,
    name: 'microphone',
    title: 'Mute',
  },
  {
    id: 2,
    name: 'video-camera',
    title: 'Stop Video',
  },
  {
    id: 3,
    name: 'upload',
    title: 'Share content',
  },
  {
    id: 4,
    name: 'group',
    title: 'Participants',
  },
];


let socket;
const MeetingRoom = () => {
  const [name, setName] = useState()
  const [roomId, setRoomId] = useState()
  const [activeUsers, setActiveUsers] = useState([]);
  const [startCamera, setStartCamera] = useState(false);

  // modal
  const [modalVisible, setModalVisible] = useState(false);


  const astartCamera = async () => {

    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      setStartCamera(true);
    } else {
      Alert.alert('Permission to use camera is required');
    }
  }

  const joinRoom = () => {
    astartCamera();
    socket.emit('join-room', { roomId: roomId, userName: name })
  }


  //lets Connect The hosting server 

  useEffect(() => {
    // const API_URL ="http://192.168.106.19:3001/"

    // here we are using Localhost using NGROK  custome link
    socket = io("https://a317-2402-3a80-1a4a-5c4f-1537-545a-5109-aaf8.in.ngrok.io")
    console.log("You are to see connection")
    socket.on('connection', () => console.log("You are connected"))
    socket.on("all-users", users => {

      console.log("Activer users")
      console.log(users)
      console.log(name)
      //     users = users.filter(user => (user.userName != name))
      console.log(users, "After filter cleanup")
      setActiveUsers(users)
    })
  }, [])

  return (
    <View style={styles.container} >

      {startCamera ? (
        <View style={{ flex: 1 }}>

          <Modal
            animationType="slide"
            transparent={false}
            presentationStyle={'fullScreen'}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Chat has been closed.');
              setModalVisible(!modalVisible);
            }}
          >
           
            <Chat 
            modalVisible = {modalVisible}
            setModalVisible = {setModalVisible}
             />


          </Modal>

          {/*Active user section  */}
          <View style={styles.activeUsersContainer}>
            <View style={styles.cameraContainer}>
              <Camera
                type={"front"}
                style={{
                  width: activeUsers.length <= 1 ? '100%' : 200,
                  height: activeUsers.length <= 1 ? 530 : 165,
                }}
              >
              </Camera>
              {activeUsers.filter(user => (user.userName != name)).map((user, index) =>
                <View key={index} style={styles.activeUserContainer}>
                  <Text>{user.userName} </Text>
                </View>)}
            </View>
          </View>

          { /* Camera footer */}
          <View style={styles.menu}>
            {menuIcons.map((icon, index) =>
              <TouchableOpacity key={index} style={styles.tile}>
                <FontAwsome name={icon.name} size={30} color="black" />
                <Text style={styles.textTitle}>{icon.title}</Text>
              </TouchableOpacity>
             
            )}

<TouchableOpacity 
              onPress={() => setModalVisible(true)}
              style={styles.tile}>
               <FontAwsome name={"comment"} size={30} color="black" />
               <Text style={styles.textTitle}>chat</Text>
             </TouchableOpacity>



          </View>

        </View>
      ) : (

        //start meeting section 
        <StartMeeting
          name={name}
          roomId={roomId}
          setName={setName}
          setRoomId={setRoomId}
          joinRoom={joinRoom}
        />
      )
      }

    </View>
  )
}

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,

  },
  tile: {
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 16,
    fontFamily: "sans-serif-medium",
  },
  cameraContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  activeUsersContainer: {
    flex: 1,
    justifyContent: "center",
  },

  activeUserContainer: {
    borderColor: "red",
    borderWidth: 1,
    width: 200,
    height: 165,
    justifyContent: "center",
    alignItems: "center",
  }



})