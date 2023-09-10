import React from "react";
import { Button, View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <View >
     <Text style={styles.headText}>Where would you like to work?</Text>
     <Text style={styles.secondaryText}>Select at least 1</Text>
     </View>
     <View style={{paddingHorizontal:40}}>
     {/* duplicatable view for same buttons */}
     <View style={{flexDirection: 'row' , paddingHorizontal:0}}>
        <TouchableOpacity style={[styles.button,{width: 86,}]}>
            <Text style={styles.buttonText}>Karachi</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:4,marginVertical:20}} />
        <TouchableOpacity style={[styles.button,{width: 110,}]}>
            <Text style={styles.buttonText}>Amsterdam</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:4,marginVertical:25}} />
        <TouchableOpacity style={[styles.button,{width:75}]}>
            <Text style={styles.buttonText}>Tokyo</Text>
        </TouchableOpacity>
       
     </View>

     <View style={{flexDirection: 'row',marginRight:0 }}>
        {/* <TouchableOpacity style={[styles.button,{width:115}]}>
            <Text style={styles.buttonText}>Islamabad</Text>
        </TouchableOpacity> */}
        {/* <View style={{marginHorizontal:4,marginVertical:25}} /> */}
        <TouchableOpacity style={[styles.button,{width:86}]}>
            <Text style={styles.buttonText}>London</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:4,marginVertical:25}} />

        <TouchableOpacity style={[styles.button,{width:75}]}>
            <Text style={styles.buttonText}>Berlin</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:4,marginVertical:25}} />
        <TouchableOpacity style={[styles.button,{width:108}]}>
            <Text style={styles.buttonText}>Islamabad</Text>
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
        <TouchableOpacity style={[styles.button,{width:86}]}>
            <Text style={styles.buttonText}>Boston</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:6,marginVertical:25}} />
        <TouchableOpacity style={[styles.button,{width:100}]}>
            <Text style={styles.buttonText}>Singapore</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:6,marginVertical:25}} />

        <TouchableOpacity style={[styles.button,{width:75}]}>
            <Text style={styles.buttonText}>Paris</Text>
        </TouchableOpacity>
     </View>

     <View style={{flexDirection: 'row' ,marginRight:0}}>
        {/* <TouchableOpacity style={[styles.button,{width:81}]}>
            <Text style={styles.buttonText}>Paris</Text>
        </TouchableOpacity> */}
        {/* <View style={{marginHorizontal:6,marginVertical:25}} /> */}
        <TouchableOpacity style={[styles.button,{width:96}]}>
            <Text style={styles.buttonText}>New York</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:6,marginVertical:25}} />

        <TouchableOpacity style={[styles.button,{width:75}]}>
            <Text style={styles.buttonText}>Dubai</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:6,marginVertical:25}} />

        <TouchableOpacity style={[styles.button,{width:90}]}>
            <Text style={styles.buttonText}>Remote</Text>
        </TouchableOpacity>
     </View>

     
     </View>

<TouchableOpacity style={[styles.buttonMain,{width:70,marginLeft:280,marginTop:10}]} onPress={() => navigation.navigate("signup3")} >
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