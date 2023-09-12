import React from "react";
import { Button, View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{marginTop:0,paddingRight:35}}>

        
      <Text style={styles.headText}>Tell us what you're looking for </Text>
      <Text style={[styles.secondaryText,{}]}>We'll take care of the rest for you</Text>
        

{/* main view for button alignment */}
    <View style={styles.buttonView}>
{/* button section that is replicating  */}
     <TouchableOpacity  style={[styles.button , {backgroundColor:'#00B4D8',marginBottom:5,width:168}]}  >

        <View style={{flexDirection:'row'}}>

        <Image source = {require('../assets/Location.png')} style={{width:20, height:20,marginTop:6}} />
         <Text style={styles.buttonText}>Remote & Karachi</Text>

        </View>
     
      </TouchableOpacity>
      {/* button section ends here  */}

    {/* this view is for creating a gap */}
    <View style={{marginHorizontal:3}} />

      <TouchableOpacity style={[styles.button,{marginBottom:5,width:183}]}>

      <View style={{flexDirection:'row'}}>

        <Image source = {require('../assets/Salary.png')} style={{width:20, height:20,marginTop:6}} />
        <Text style={styles.buttonText}>$55k - $100k salary</Text>

     </View>

      </TouchableOpacity>



      <TouchableOpacity  style={[styles.button , {backgroundColor:'#00B4D8',marginBottom:55,width:151}]}  >

    <View style={{flexDirection:'row'}}>

        <Image source = {require('../assets/BAI.png')} style={{width:20, height:20,marginTop:6}} />
        <Text style={styles.buttonText}>Blockchain & AI</Text>

    </View>

      </TouchableOpacity>


<TouchableOpacity onPress={() => navigation.navigate("onboarding2")} >
    <Image source = {require('../assets/arrow.png')}  />
</TouchableOpacity>

</View>


</View>

<TouchableOpacity style={[styles.button,{width:64,marginLeft:250,marginBottom:10}]}>
        <Text style={styles.buttonText}>Skip</Text>
 </TouchableOpacity>


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
        // marginBottom:10,
        padding:40
    },

    secondaryText: {
        fontWeight:"300",
        color: '#424F52',
        paddingHorizontal:40,
        marginTop:3
        
    },
    buttonView: {
        // display: "flex",
        flexDirection: "column",
        // marginTop:19,
        padding:40,


    //   padding:5,
    },

    buttonText:{
        
        marginTop:7,
        color: '#ffffff',
        fontWeight:'600',
        paddingHorizontal:5

    },

    button:{
        paddingHorizontal:11,
        borderWidth:1,
        borderColor: 'transparent',
        height:36,
        width:182,
        borderRadius:90,
        backgroundColor:'black'
        
    },

    
})

// onPress={() => navigation.navigate("onboarding1")}