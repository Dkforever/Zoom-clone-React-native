import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import MeetingRoom from './MeetingRoom'
import Home from './Home'



const Navigation = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName={Home}>
            <Stack.Screen name="Home" component={Home} 
            options ={{headerShown: false}}
             />
            
             <Stack.Screen name="Room" component={MeetingRoom} 
             options={{title: 'Start Meeting',
            }}
            
             /> 
        </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Navigation