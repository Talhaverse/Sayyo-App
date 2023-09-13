import React from "react";
import { Button, View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
        <View >
     <Text style={styles.headText}>Wanna select a specific industry?</Text>
     <Text style={styles.secondaryText}>Select at least 1</Text>
     </View>
     <View style={{paddingHorizontal:40}}>
     {/* duplicatable view for same buttons */}
     <View style={{flexDirection: 'row' , paddingHorizontal:0}}>
        <TouchableOpacity style={[styles.button,{width: 'auto',}]}>
            <Text style={styles.buttonText}>B2B</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:4,marginVertical:20}} />
        <TouchableOpacity style={[styles.button,{width: 'auto',}]}>
            <Text style={styles.buttonText}>B2C</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:4,marginVertical:25}} />
        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>Retail</Text>
        </TouchableOpacity>
       
     </View>

     <View style={{flexDirection: 'row',marginRight:0 }}>
        {/* <TouchableOpacity style={[styles.button,{width:115}]}>
            <Text style={styles.buttonText}>Islamabad</Text>
        </TouchableOpacity> */}
        {/* <View style={{marginHorizontal:4,marginVertical:25}} /> */}
        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>AI</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:4,marginVertical:25}} />

        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>Blockchain</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:4,marginVertical:25}} />
        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>SaaS</Text>
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
            <Text style={styles.buttonText}>eCommerce</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:6,marginVertical:25}} />
        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>Fintech</Text>
        </TouchableOpacity>

       
     </View>

     <View style={{flexDirection: 'row' ,marginRight:0}}>
        {/* <TouchableOpacity style={[styles.button,{width:81}]}>
            <Text style={styles.buttonText}>Paris</Text>
        </TouchableOpacity> */}
        {/* <View style={{marginHorizontal:6,marginVertical:25}} /> */}
        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>Web3</Text>
        </TouchableOpacity>

        <View style={{marginHorizontal:6,marginVertical:25}} />

        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>Marketplace</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:6,marginVertical:25}} />


     </View>

     
     </View>

<View style={{flexDirection:'row',padding:40}}>


     <TouchableOpacity style={[styles.buttonMain,{width:'auto',marginTop:0}]} onPress={() => navigation.navigate("")} >
        <Text style={styles.buttonText}>Skip</Text>
 </TouchableOpacity>

<TouchableOpacity style={[styles.buttonMain,{width:65,marginLeft:190,marginTop:0}]} onPress={() => navigation.navigate("signup9")} >
        <Text style={styles.buttonText}>Next</Text>
 </TouchableOpacity>

</View>

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