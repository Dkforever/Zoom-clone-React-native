import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Home from './Screens/Home';
import Navigation from './Screens/Navigation';

export default function App() {
  return (
    <> 
    <StatusBar style="auto" backgroundColor='#bababa' />
   <Navigation />
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
