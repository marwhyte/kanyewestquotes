import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Color from "../constants/Colors";
import { Link } from "react-router-native";
import kanye from "../images/frontpage.jpg";

const StartScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.welcome}>
        <Text style={styles.headerColor}>
          Welcome To the Kanye West Quote App
        </Text>
      </View>
      <View style={styles.spaceBetween}>
        <Text style={styles.introText}>
          A home for all your Kanye quote needs, make a new quote, save to your
          quotes and view your saved quotes
        </Text>
        <Image style={styles.image} source={kanye} />

        <View style={styles.buttonStyle}>
          <Link to="/newQuote" underlayColor="#f0f4f7">
            <Text style={styles.link}>Get your new Quote!</Text>
          </Link>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    alignItems: "center",
  },
  welcome: {
    shadowColor: Color.primaryColor,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 12,
    shadowOpacity: 0.6,
    shadowRadius: 0,
    elevation: 8,
    backgroundColor: Color.secondaryColor,
    padding: 20,
    borderRadius: 10,
  },
  headerColor: {
    color: "white",
  },
  introText: {
    textAlign: "center",
    paddingTop: 50,
    color: Color.secondaryColor,
  },
  buttonStyle: {
    marginTop: 60,
  },
  spaceBetween: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    marginTop: 10,
    borderRadius: 15,
  },
  link: {
    color: Color.secondaryColor,
    fontSize: 20,
    paddingBottom: 50,
  },
});

export default StartScreen;
