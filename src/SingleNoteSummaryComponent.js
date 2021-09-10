import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SingleNoteSummaryComponent = (props) =>{
    // console.log(props)
    return <View backgroundColor={randomBackground()} style={styles.textViewStyle}>
                {/* <Text>{props.myNoteDate.toDateString()}</Text> */}
                <Text>{props.myNoteDate}</Text>
                <Text style={styles.textProperties}>{props.myNoteText} </Text>
            </View>
}

const randomBackground = () => {

    // floor => 1.4 -> 1, 1.5-> 1 it means it remove the decimslparts
  
    var red = Math.floor(Math.random() * 255)  // 123
    var green = Math.floor(Math.random() * 255) // 45
    var blue = Math.floor(Math.random() * 255) // 43
  
    //String Interpolation
    // in a string -> insert a value of some other data type -> "", '', ``
  
    return `rgb(${red}, ${green}, ${blue})` // rgb(123, 45, 43)
  }

  const styles = StyleSheet.create({
    textProperties : {
     fontSize: 24,
     textAlign: "center",
     color: 'black'
   },
   textViewStyle: {
     height: 150,
     width: 140,
     margin: 10,
     borderRadius: 10,
     padding: 5,
     alignItems: "center",
     justifyContent: "center",
     opacity: 0.7
   }
 });

 export default SingleNoteSummaryComponent;