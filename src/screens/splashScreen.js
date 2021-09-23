import * as React from "react";
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";

import GamingImg from "../assets/svg/GamingImg.svg"

const SplashScreen = ({ navigation }) => {
    
    let [fontsLoaded] = useFonts({
      BebasNeue: require("../assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf"),
      Poppins: require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }
    
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>gameon</Text>
        </View>

        <View style={styles.svg}>
          <GamingImg
            width={300}
            height={300}
            style={{
              transform: [
                {
                  rotate: "-15deg",
                },
              ],
            }}
          />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <View style={styles.button}>
            <Text style={styles.text}>Let's Begin</Text>
            <AntDesign name="right" size={22} color="#fff" />
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingVertical: 25 
    // alignItems: "center"
  },
  title: {
    fontFamily: "Poppins",
    fontSize: 30,
    fontWeight: "bold",
    color: "purple",
    textTransform: "uppercase",
    alignSelf: "center",
    marginTop: 25
  },
  text: {
    fontFamily: "BebasNeue",
    color: "#fff",
    fontSize: 18,
  },
  svg: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20
  },
  button: {
    backgroundColor: "#AD40AF",
    padding: 20,
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25
  },
});

export default SplashScreen;