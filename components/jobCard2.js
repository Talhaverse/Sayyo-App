import React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import * as WebBrowser from 'expo-web-browser';


export default function JobCard({ navigation }) {

    const openLink = async () => {
        const url = 'https://careers.tiktok.com/position/7273063903272323387/detail'; // Replace with your desired URL
        
        try {
          await WebBrowser.openBrowserAsync(url);
        } catch (error) {
          console.error('Error opening URL: ', error);
        }
      };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.headText}>
          Artist Partnerships and A&R Manager - MENA, Tiktok
        </Text>
        <Text style={styles.secondaryText}>Short-form video hosting</Text>
        <Image
          source={require("../assets/tiktok.png")}
          style={{ height: 34, width: 117, marginTop: 10 }}
        />
        <Text style={styles.secondaryText2}>Open For Applications</Text>

        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 30,
          }}
        />

        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            marginTop: 10,
            padding: 4,
            width: 105,
            borderRadius: 7,
            height: 40,
          }}
        >
          <Image
            source={require("../assets/SalaryRange.png")}
            style={{ width: 20, height: 20, marginTop: 6 }}
          />
          <Text style={styles.buttonText}> $20k-30K </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            marginTop: 5,
            padding: 4,
            width: 160,
            borderRadius: 7,
            height: 40,
          }}
        >
          <Image
            source={require("../assets/JobLevel.png")}
            style={{ width: 20, height: 20, marginTop: 6 }}
          />
          <Text style={styles.buttonText}> Mid & Senior level </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            marginTop: 5,
            padding: 4,
            width: 113,
            borderRadius: 7,
            height: 37,
          }}
        >
          <Image
            source={require("../assets/Location.png")}
            style={{ width: 20, height: 20, marginTop: 6 }}
          />
          <Text style={styles.buttonText}> Abu Dhabi </Text>
        </View>

        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
            marginTop: 20,
          }}
        />
        <View style={styles.container2}>
          <Text style={styles.headText2}>About Company</Text>
          <Text style={styles.secondaryText3}>
            TikTok is the leading destination for short-form mobile video. Our
            mission is to inspire creativity and bring joy. TikTok has global
            offices including Los Angeles, New York, London, Paris, Berlin,
            Dubai, Singapore, Jakarta, Seoul and Tokyo.
          </Text>
        </View>

        <View
          style={[styles.container2, { flexDirection: "row", marginTop: 60 }]}
        >
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("jobCard3")} >
            <Text style={styles.buttonText2}> PASS </Text>
          </TouchableOpacity>

          <View style={{ marginHorizontal: 6 }} />

          <TouchableOpacity style={styles.button} onPress={openLink} >
            <Text style={styles.buttonText2}> APPLY </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#A8DADC",
  },

  container2: {
    flex: 1,
    marginTop: 35,
  },
  headText: {
    fontWeight: "500",
    fontSize: 25,
    width: 350,
    marginBottom: 5,
  },

  secondaryText: {
    fontWeight: "300",
    color: "#424F52",
    marginTop: 3,
  },

  secondaryText2: {
    fontWeight: "300",
    color: "#000000",
    marginTop: 20,
    borderWidth: 1,
    width: 160,
    borderRadius: 10,
    padding: 4,
  },

  secondaryText3: {
    fontWeight: "300",
    fontSize: 15,
    // color: "#000000",
    padding: 2,
    width: 354,
    lineHeight: 20,
  },

  buttonView: {
    // display: "flex",
    flexDirection: "row",
    marginTop: 19,
    paddingRight: 30,

    //  padding:15,
  },

  buttonText: {
    marginTop: 7,
    color: "#000000",
    fontWeight: "600",
  },

  buttonText2: {
    marginTop: 7,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },

  headText2: {
    marginBottom: 20,
    color: "#000000",
    fontWeight: "bold",
    fontSize: 20,
  },

  button: {
    paddingHorizontal: 11,
    borderWidth: 1,
    borderColor: "transparent",
    height: 42,
    width: 156,
    borderRadius: 15,
    backgroundColor: "black",
  },
});
