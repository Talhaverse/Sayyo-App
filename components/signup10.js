import React from "react";
import { Button, View, Text,SafeAreaView,StyleSheet,TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{marginTop:390,paddingRight:100}}>

        <View>
      <Text style={styles.headText}>sayyo</Text>
      <Text style={styles.secondaryText}>Easiest way to connect with </Text>
      <Text style={styles.secondaryText}>talent and recruiters</Text>
        </View>

    <View style={styles.buttonView}>

     <TouchableOpacity  style={[styles.button , {backgroundColor:'#00B4D8'}]}  onPress={() => navigation.navigate("signup11")}>
        <Text style={styles.buttonText}>Continue with email</Text>
      </TouchableOpacity>

    {/* this view is for creating a gap */}
    <View style={{marginHorizontal:3}} />

      
</View>

</View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: '#A8DADC',
    },
    headText: {
        fontWeight:"bold",
        fontSize: 50,
        marginBottom:10
    },

    secondaryText: {
        fontWeight:"300",
        color: '#424F52',
        marginTop:3,
    },

    buttonView: {
        // display: "flex",
        flexDirection: "row",
        marginTop:19,
        paddingRight:30,

        //  padding:15,
    },

    buttonText:{
        
        marginTop:7,
        color: '#ffffff',
        fontWeight:'600'

    },

    button:{
        paddingHorizontal:11,
        borderWidth:1,
        borderColor: 'transparent',
        height:36,
        borderRadius:90,
        backgroundColor:'black'
        
    },

    
})


// backgroundColor: 'rgba(168,218,220)'