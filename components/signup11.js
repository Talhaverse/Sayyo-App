import React from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet,TouchableOpacity, SafeAreaView,TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function YourComponent({navigation}) {

const handleScreenTap = ()=>{
    // dismiss keyboard when screen is tapped
    Keyboard.dismiss();
}


  return (
    <SafeAreaView style={styles.container}> 
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20} // Customize the vertical offset as needed
    >
        <TouchableWithoutFeedback  onPress={handleScreenTap}>
      <View>
        {/* <Text style={styles.header}>Your Content</Text> */}
        <Text style={styles.headText}>Connect your LinkedIn for better reach?</Text>
     <Text style={styles.secondaryText}>Please paste your LinkedIn URL below:</Text>

     <View style={{alignItems: 'center',paddingHorizontal:30,alignItems: 'flex-start'}}>
       <TextInput placeholder="Enter your LinkedIn URL"    style={styles.input} />
     </View>

      </View>



     
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>

    <TouchableOpacity style={[styles.buttonMain,{width:76,marginLeft:280,marginTop:10}]} onPress={() => navigation.navigate("signup10")} >
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
  content: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
  },


  headText: {
            fontWeight:"bold",
             fontSize: 50,
             padding:30,
             color: '#ffffff'
         },

         secondaryText: {
                     fontWeight:"300",
                     color: '#ffffff',
                     paddingHorizontal:40,
                     marginBottom:20
                    
                 },

                 buttonMain:{
                           paddingHorizontal:11,
                           marginBottom:18,
                             borderWidth:1,
                             borderColor: 'transparent',
                            height:36,
                            //  width:150,
                             borderRadius:90,
                             backgroundColor:'black' },


                             buttonText:{
        
                                       marginTop:7,
                                         color: '#ffffff',
                                         fontWeight:'600',
                                         paddingHorizontal:5
                                
                                     },




                                     input: {
                                                height: 40,
                                                width:300,
                                                 margin: 10,
                                                 borderWidth: 1,
                                                 borderRadius:30,
                                                 padding: 10,
                                                 borderColor: 'white',
                                                 color: '#000000'
                                               },
});




