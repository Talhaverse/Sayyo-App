import React,{useEffect} from "react";
import { Button, View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image } from "react-native";

export default function HomeScreen({ navigation }) {

    useEffect(() => {
        const timeout = setTimeout(() => {
          navigation.navigate('jobCard');
        }, 1000);
    
        return () => clearTimeout(timeout);
      }, [navigation]);

//   return (
//     <SafeAreaView style={styles.container}>
//         <View>

//         <Image
//             source={require("../assets/Logo.png")}
//             style={{ width: 400, height: 400, marginTop: 6 }}
//           />
//       <Text style={styles.headText}>Congrats! </Text>
//       <Text style={styles.headText}>You're all set.</Text>


      

// </View>
//     </SafeAreaView>

//   );

return (
    // <View style={styles.container}>
      <Image
        source={require('../assets/Congrats!.png')}
        style={styles.logo}
      />
      

    // </View>
  );
};








const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#A8DADC',
      flex:1
    },
    logo: {
      width: '100%', // Set the desired width
      height: '100%', // Set the desired height
      resizeMode: 'cover', // You can adjust this to your preference
    },
    text: {
      fontWeight: 'bold',
      fontSize: 18, // You can adjust the font size
      marginTop: 0, // Adjust the spacing between the logo and text
    },
  });
  


// backgroundColor: 'rgba(168,218,220)'