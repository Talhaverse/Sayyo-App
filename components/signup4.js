import React from "react";
import { Button, View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <View >
     <Text style={styles.headText}>Languages you can work in/with?</Text>
     <Text style={styles.secondaryText}>Select at least 1</Text>
     </View>
     <View style={{paddingHorizontal:40}}>
     {/* duplicatable view for same buttons */}
     <View style={{flexDirection: 'row' , paddingHorizontal:0}}>
        <TouchableOpacity style={[styles.button,{width: 'auto',}]}>
            <Text style={styles.buttonText}>German</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:4,marginVertical:20}} />
        <TouchableOpacity style={[styles.button,{width: 'auto',}]}>
            <Text style={styles.buttonText}>Italian</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:4,marginVertical:25}} />
        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>Arabic</Text>
        </TouchableOpacity>
       
     </View>

     <View style={{flexDirection: 'row',marginRight:0 }}>
        {/* <TouchableOpacity style={[styles.button,{width:115}]}>
            <Text style={styles.buttonText}>Islamabad</Text>
        </TouchableOpacity> */}
        {/* <View style={{marginHorizontal:4,marginVertical:25}} /> */}
        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>French</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:4,marginVertical:25}} />

        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>Dutch</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:4,marginVertical:25}} />
        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>Urdu</Text>
        </TouchableOpacity>
       
     </View>

     {/* <View style={{flexDirection: 'row' , paddingHorizontal:40}}>
        <TouchableOpacity style={[styles.button,{width:85}]}>
            <Text style={styles.buttonText}>Berlin</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:6,marginVertical:25}} />
        <TouchableOpacity style={[styles.button,{width:86}]}>
            <Text style={styles.buttonText}>Tokyo</Text>
        </TouchableOpacity>
     </View> */}
     <View style={{flexDirection: 'row' ,marginRight:0}}>
        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:6,marginVertical:25}} />
        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>Hindi</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:6,marginVertical:25}} />

        
     </View>

     

     
     </View>

<TouchableOpacity style={[styles.buttonMain,{width:76,marginLeft:280,marginTop:10}]} onPress={() => navigation.navigate("signup5")} >
        <Text style={styles.buttonText}>Next</Text>
 </TouchableOpacity>

    </SafeAreaView>

  );


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "right",
      justifyContent: "center",
      backgroundColor: '#00B4Dc',
    },
    headText: {
        fontWeight:"bold",
        fontSize: 50,
        // marginBottom:500,
        padding:40,
        color: '#ffffff'
    },

    secondaryText: {
        fontWeight:"300",
        color: '#ffffff',
        paddingHorizontal:40,
        marginBottom:20
        
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
        borderColor: 'white',
        height:36,
        // width:148,
        borderRadius:90,
        // backgroundColor:'black'
        
    },
    buttonMain:{
        paddingHorizontal:11,
        borderWidth:1,
        borderColor: 'transparent',
        height:36,
        width:182,
        borderRadius:90,
        backgroundColor:'black' }
    
})

// onPress={() => navigation.navigate("onboarding1")}