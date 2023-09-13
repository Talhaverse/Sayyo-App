import React, {useState} from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet,TouchableOpacity, SafeAreaView,TouchableWithoutFeedback, Keyboard, Modal,Pressable } from 'react-native';

export default function YourComponent({navigation}) {

const handleScreenTap = ()=>{
    // dismiss keyboard when screen is tapped
    Keyboard.dismiss();
}
const [modalVisible, setModalVisible] = useState(false);



// have to add a toast message here 

  return (
    <SafeAreaView style={styles.container}>


<Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Congrats! You're all set.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>I'm Excited</Text>
            </Pressable>
          </View>
        </View>
      </Modal>




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

   

    <TouchableOpacity style={[styles.buttonMain,{width:65,marginLeft:280,marginTop:10}]} onPress={() => setModalVisible(true)} >
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

                                               centeredView: {
                                                flex: 1,
                                                justifyContent: 'top',
                                                alignItems: 'center',
                                                marginTop: 92,
                                              },
                                              modalView: {
                                                margin: 20,
                                                backgroundColor: 'white',
                                                borderRadius: 20,
                                                padding: 35,
                                                alignItems: 'center',
                                                shadowColor: '#000',
                                                shadowOffset: {
                                                  width: 0,
                                                  height: 2,
                                                },
                                                shadowOpacity: 0.25,
                                                shadowRadius: 4,
                                                elevation: 5,
                                              },
                                              button: {
                                                borderRadius: 20,
                                                padding: 10,
                                                elevation: 2,
                                              },
                                              buttonOpen: {
                                                backgroundColor: '#F194FF',
                                              },
                                              buttonClose: {
                                                backgroundColor: '#2196F3',
                                              },
                                              textStyle: {
                                                color: 'white',
                                                fontWeight: 'bold',
                                                textAlign: 'center',
                                              },
                                              modalText: {
                                                marginBottom: 15,
                                                textAlign: 'center',
                                                fontWeight: 'bold',
                                                fontSize: 36
                                              },



});




