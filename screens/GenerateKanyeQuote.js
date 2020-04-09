import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import axios from "axios";
import Color from "../constants/Colors";
import kanye from "../images/kanye.png";
import { Link } from "react-router-native";
const GenerateKanyeQuote = (props) => {
  const [newQuote, setNewQuote] = useState("You have no quotes");
  const [quoteList, setQuoteList] = useState([]);
  useEffect(() => {
    setQuoteList(props.quoteList);
  });
  const addNewQuote = () => {
    axios.get("https://api.kanye.rest").then((res) => {
      setNewQuote(res.data.quote);
      console.log(quoteList);
    });
  };
  const validateQuote = (quote) => {
    if (
      quote != "You have no quotes" &&
      !quoteList.some((quote1) => quote1.name === quote)
    ) {
      props.addQuote(quote);
    } else {
      Alert.alert(
        "Warning!",
        "Either you already saved it or no quote is generated!"
      );
    }
  };
  return (
    <View style={styles.screen}>
      <View style={styles.newQuote}>
        <Text style={styles.header}>Find Your Favorite Quote!</Text>
        <View style={styles.margin}>
          <Button
            color={Color.secondaryColor}
            title="get Quote"
            onPress={addNewQuote}
          />
        </View>
        <Text style={styles.center}>
          {newQuote === "You have no quotes"
            ? newQuote
            : `"${newQuote}" -Kanye West`}{" "}
        </Text>
        <Image style={styles.image} source={kanye} />
        <View style={styles.margin}>
          <Button
            title="save this quote"
            onPress={() => validateQuote(newQuote)}
            color="green"
          />
        </View>
      </View>
      <View style={styles.buttons}>
        <Link to="/" underlayColor="#f0f4f7">
          <Text style={styles.link}>Welcome</Text>
        </Link>
        <Link to="/savedQuotes" underlayColor="#f0f4f7">
          <Text style={styles.link}>Saved Quotes</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  newQuote: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  navigation: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  center: {
    textAlign: "center",
    marginTop: 10,
    backgroundColor: Color.primaryColor,
    padding: 20,
    borderRadius: 15,
    borderWidth: 10,
  },
  link: {
    color: Color.secondaryColor,
    fontSize: 20,
    paddingBottom: 10,
  },
  buttons: {
    textAlign: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  margin: {
    marginTop: 20,
  },
  header: {
    fontSize: 20,
    backgroundColor: "black",
    color: Color.primaryColor,
    padding: 20,
    borderRadius: 15,
  },
});

export default GenerateKanyeQuote;
