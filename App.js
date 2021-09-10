import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {

  const [userLoggedIn, setuserLoggedIn] = useState(false)

  if(firebase.apps.length === 0){
    var firebaseConfig = {
      apiKey: "AIzaSyA6SuY-8H2A6GrhNmnN58wZVwNAr_hqH4o",
      authDomain: "native-note-190e1.firebaseapp.com",
      databaseURL: "https://native-note-190e1.firebaseio.com",
      projectId: "native-note-190e1",
      storageBucket: "native-note-190e1.appspot.com",
      messagingSenderId: "329370796789",
      appId: "1:329370796789:web:f40e354ce8654ec2e7fbbc",
      measurementId: "G-HLWP5N15PW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
    
firebase.auth().onAuthStateChanged((user) => {
  if(user === null){
    setuserLoggedIn(false)      
  }else{
    setuserLoggedIn(true)      
  }
})

if(userLoggedIn) {
  return <View  style={styles.container}>
              <NotesScreenComponent/>
           </View>  
}else{
  return <View  style={styles.container}>
              <LoginScreenComponent/>  
           </View>  
}

  return (
    <View  style={styles.container}>
      {/* <Text>Sambit Saha</Text>
      <Text>I am a programer</Text>
      <StatusBar style="auto"/> */}

      {/* <NotesScreenComponent/> */}
      <LoginScreenComponent/>

    </View>    
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
