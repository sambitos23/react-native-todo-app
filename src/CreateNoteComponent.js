import React, { useState } from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';
import firebase from 'firebase';

const CreateNoteComponent = (props) => {
   
  console.log(props)
  const [newNoteText, setNewNoteText] = useState('')

    return <View>

            <TextInput 
                style={styles.textInputStyles}
                autoCorrect ={false}
                autoCapitalize = "none"
                multiline ={true}
                // value={inputTextValue}
                value={newNoteText}
                onChangeText={(currentText) => setNewNoteText(currentText)}
            />

            <Button              
               title ={"Create Note"}
               onPress={() => {
                  //  props.onCreateButtonPress(newNoteText)

                   // store the text on firebase as well
                   // /user/{id}/
                   if(newNoteText !== ''){
                        const loggedInUserId = firebase.auth().currentUser.uid
                        const pathForData = `/user/${loggedInUserId}/`
    
                        firebase.database()
                                .ref(pathForData)
                                .push({
                                  'date': new Date().toDateString(),
                                  'text': newNoteText
                                })
                        setNewNoteText('')
                   }                    
               }} 
            />

           </View>
}

const styles = StyleSheet.create({
    textInputStyles: {
        borderWidth: 4,
        width: 320,
        height: 70,
        borderRadius: 10,
        paddingLeft: 8,
        marginBottom: 20
      }
});

export default CreateNoteComponent;