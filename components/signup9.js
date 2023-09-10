import React,{useState} from "react";
import { Button, View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image} from "react-native";
import Slider from '@react-native-community/slider';
import SalaryRange from '../assets/SalaryRange.png';



export default function HomeScreen({ navigation }) {

    const [sliderValue , setSliderValue] = useState(0)

  return (
    <SafeAreaView style={styles.container}>
        <View >
     <Text style={styles.headText}>Minimum expected salary?</Text>
     <Text style={styles.secondaryText}>It is only to filter our roles & will never be shared with any company.</Text>
     </View>

{/* slider will come here  */}

<Text style={[styles.secondaryText, {fontWeight:'bold',fontSize:20}]}> {sliderValue}K</Text>


<Slider
  style={{width: '80%', height: 40,marginHorizontal:40}}
  minimumValue={3}
  maximumValue={100}
  minimumTrackTintColor="#000000"
  maximumTrackTintColor="#FFFFFF"
  thumbTintColor="#000000"
  value={sliderValue}
  onValueChange={(sliderValue) =>{setSliderValue(Math.trunc(sliderValue))}}
/>

<View style={{marginHorizontal:6,marginVertical:25}} />




     <View style={{alignItems: 'center',paddingHorizontal:40,alignItems: 'flex-start'}}>
     {/* duplicatable view for same buttons */}
     <View style={{flexDirection: 'row' , marginRight:0}}>
        <TouchableOpacity style={[styles.button,{width: 'auto',}]}>
            <Text style={styles.buttonText}>USD$</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:6,marginVertical:25}} />
        <TouchableOpacity style={[styles.button,{width: 'auto',}]}>
            <Text style={styles.buttonText}>CAD$</Text>
        </TouchableOpacity>
        <View style={{marginHorizontal:6,marginVertical:25}} />

        <TouchableOpacity style={[styles.button,{width:'auto'}]}>
            <Text style={styles.buttonText}>EUR€</Text>
        </TouchableOpacity>
     </View>


    

     
     
     </View>

<TouchableOpacity style={[styles.buttonMain,{width:76,marginLeft:280,marginTop:10}]} onPress={() => navigation.navigate("signup7")} >
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