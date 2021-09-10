import React, { useState, useEffect } from 'react';
import  {Text, FlatList, View, StyleSheet, TextInput, Button}  from 'react-native';
import CreateNoteComponent from './CreateNoteComponent';
import SingleNoteSummaryComponent from './SingleNoteSummaryComponent';
import firebase from 'firebase'; 
import _ from 'lodash';

// a react component is nothing but a javascript function

const NotesScreenComponent = () => {
  // var data = [
  //   {"date": "21-10-2020", "text": "I am going to Malda"},
  //   {"date": "22-10-2021", "text": "I have to buy vegatables"},
  //   {"date": "22-10-2022", "text": "I have to buy vegatables"},
  //   {"date": "22-10-2023", "text": "I have to buy vegatables"},
  //   {"date": "22-10-2024", "text": "I have to buy vegatables"},
  //   {"date": "22-10-2025", "text": "I have to buy vegatables"},
  //   {"date": "22-10-2026", "text": "I have to buy vegatables"},
  //   {"date": "22-10-2027", "text": "I have to buy vegatables"},
  //   {"date": "22-10-2028", "text": "I have to buy vegatables"},
  //   {"date": "22-10-2029", "text": "I have to buy vegatables"},
  // ]

  const [data, setData] = useState([]);

  const loggedInUserId = firebase.auth().currentUser.uid

  useEffect(() => {firebase.database()
            .ref(`/user/${loggedInUserId}/`)
            .on('value', (completeNewData) => {
                    console.log(completeNewData) 

                    const newDataList = _.map(completeNewData.val(), (value, key) => {
                         return {...value}
                    })
                    setData(newDataList.reverse())
               }
            )}, [])

  const addNewNote = (text) => {
    if(text.length > 0){
      setData([{"text": text, "date": new Date()}, ...data])
    }

    // A= ['a', 'b', 'c', 'd'] => ...A => 'a', 'b', 'c', 'd'
  }

  // to write javascript inside jsx, i need to enclose javascript code in {}

  // var inputTextValue = "Sambit"

  return <View style={styles.viewProperties}>

         <View style={styles.logOut}>
              <Button 
                  title={"Logout"}
                  color="black"
                  onPress={() => firebase.auth().signOut()}
              />
         </View>

             <CreateNoteComponent onCreateButtonPress={
                  (text) => addNewNote(text)
             }/>
            
             <FlatList 
                  // horizontal={true}
                  showsVerticalScrollIndicator={false}
                  style={styles.listProperties}
                  data={data}
                  keyExtractor={(item) => {
                        return item.date
                  }}
                  numColumns={2}
                  // renderItem={({item}) =><Text style={styles.textProperties}> {item.text} </Text> }
                  // renderItem={({item}) =>{
                  //   let a = 2 + 2
                  //   return <Text style={styles.textProperties}> {item.text}, {a} </Text>
                  // }}
                  renderItem={({item}) =>{
                    return <SingleNoteSummaryComponent myNoteDate= {item.date} myNoteText={item.text}/>
                  }}
             />
         </View>

  // return <View>
  //           <Text>Notes Screen Text 1</Text>
  //           <Text>Notes Screen Text 2</Text>
  //        </View>
}

const styles = StyleSheet.create({
   viewProperties : {
      marginTop: 50
  },
   textProperties : {
    fontSize: 24,
    textAlign: "center"
  },
   logOut : {
     margin: 10,
     width: 100,
     marginLeft: '59%',
   }
});

export default NotesScreenComponent;





// javascript object JSON -> javascript object notation

// {
//   'name': 'Sambit',
//   'age': 'blah',
//   'hobby': 'meh',
//   'friends': [
//     "A", "B", "C"
//   ],

// [] => represent the list

//   'school' : {
//       'name': 'BHS',
//       'location': 'Rajasthan'
//   },

// {} => represent the javascript Object

//   'fav_city': 'abc'
// }