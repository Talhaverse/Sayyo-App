import React from "react";
import { Button, View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <View >
     <Text style={styles.headText}>What level of roles are you looking for?</Text>
     <Text style={styles.secondaryText}>Select at least 3</Text>
     </View>
     <View style={{alignItems: 'center',paddingHorizontal:40,alignItems: 'flex-start'}}>
     {/* duplicatable view for same buttons */}
     <View style={{flexDirection: 'row' , marginRight:0}}>
        <TouchableOpacity style={[styles.button,{width: 'auto',}]}>
            <Text style={styles.buttonText}>Internships</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:6,marginVertical:25}} />
        <TouchableOpacity style={[styles.button,{width: 119,}]}>
            <Text style={styles.buttonText}>Entry Level</Text>
        </TouchableOpacity>
     </View>

     <View style={{flexDirection: 'row' ,  marginRight:0}}>
        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>Junior</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:6,marginVertical:25}} />
        <TouchableOpacity style={[styles.button,{width:"auto"}]}>
            <Text style={styles.buttonText}>Mid-level (3-4 years)</Text>
        </TouchableOpacity>
     </View>

     <View style={{flexDirection: 'row' ,  marginRight:0}}>
     <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>Senior (5-8 years)</Text>
        </TouchableOpacity>
       
        <View style={{marginHorizontal:6,marginVertical:25}} />
        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>Expert (9+ years)</Text>
        </TouchableOpacity>
     </View>

    


     
     </View>

<TouchableOpacity style={[styles.buttonMain,{width:65,marginLeft:280,marginTop:10}]} onPress={() => navigation.navigate("signup8")} >
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
        //width:148,
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