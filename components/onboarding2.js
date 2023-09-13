import React from "react";
import { Button, View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <View style={{marginTop:0,paddingRight:35}}>

        
      <Text style={styles.headText}>Say yo or no simply by swiping</Text>
      <Text style={[styles.secondaryText,{}]}>We'll be learning your preference</Text>
        

{/* main view for button alignment */}
    <View style={styles.buttonView}>
{/* button section that is replicating  */}
     <TouchableOpacity  style={[styles.button , {backgroundColor:'#00B4D8',marginBottom:5,width:148}]}  >

        <View style={{flexDirection:'row'}}>

        <Image source = {require('../assets/Infinity.png')} style={{width:20, height:20,marginTop:6}} />
         <Text style={styles.buttonText}>Infinity Games</Text>

        </View>
     
      </TouchableOpacity>
      {/* button section ends here  */}

    {/* this view is for creating a gap */}
    <View style={{marginHorizontal:3}} />

      <TouchableOpacity style={[styles.button,{marginBottom:5,width:169}]}>

      <View style={{flexDirection:'row'}}>

        <Image source = {require('../assets/Unity.png')} style={{width:20, height:20,marginTop:6}} />
        <Text style={styles.buttonText}>Unity Developer</Text>

     </View>

      </TouchableOpacity>



      <TouchableOpacity  style={[styles.button , {backgroundColor:'#00B4D8',marginBottom:55,width:98.18}]}  >

    <View style={{flexDirection:'row'}}>

        <Image source = {require('../assets/arrow.png')} style={{width:20, height:20,marginTop:6}} />
        <Text style={styles.buttonText}>Remote</Text>

    </View>

      </TouchableOpacity>


<TouchableOpacity>
    <Image source = {require('../assets/arrow.png')} />
</TouchableOpacity>

</View>


</View>

<TouchableOpacity style={[styles.button,{width:140,marginLeft:200,marginBottom:10}]} onPress={() => navigation.navigate("signup")} >
        <Text style={styles.buttonText}>Create Account</Text>
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