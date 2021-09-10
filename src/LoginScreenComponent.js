import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import {StyleSheet} from 'react-native';
import firebase from 'firebase';

const LoginScreenComponent =() => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return <View>
         <Text> Email </Text>
         <TextInput 
            style={styles.textInputStyle}
            autoCapitalize='none'
            autoCorrect={false}
            value={email}
            onChangeText={(currentText) => setEmail(currentText)}
         />
          <Text>Password</Text>
          <TextInput 
            style={styles.textInputStyle}
            autoCapitalize='none'
            autoCorrect={false}
            secureTextEntry={true}
            value={password}
            onChangeText={(currentText) => setPassword(currentText)}
         />

        <View style={styles.buttonStyle}>
            <Button 
                title={'Login'}
                onPress={() => firebase.auth().signInWithEmailAndPassword(email, password)}
            />
        </View>    
        <View style={styles.buttonStyle}>
            <Button 
                title={'Signup'}
                onPress={() => {
                    firebase
                       .auth()
                       .createUserWithEmailAndPassword(email, password)
                       .then(() => {
                           setEmail("")
                           setPassword("")
                    })
                       .catch(() => {
                           console.log("Some error happen")
                       })
                }}
            />
        </View>   
    </View>
}

const styles = StyleSheet.create({
    textInputStyle: {
        width: 300,
        borderWidth: 3,
        margin: 10,
        padding: 10,
        borderRadius: 3
    },
    buttonStyle: {
        margin: 10,
    }
});

export default LoginScreenComponent;