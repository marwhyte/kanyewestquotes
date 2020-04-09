import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import Color from "../constants/Colors";
import { Link } from "react-router-native";

const SavedKanyeQuotes = (props) => {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    setQuotes(props.quoteList);
  });

  const deleteItem = (key) => {
    newQuotes = quotes.filter((quote) => quote.key !== key);
    setQuotes(newQuotes);
  };
  console.log("here", quotes);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Your Saved Quotes</Text>
      <FlatList
        data={quotes}
        renderItem={({ item }) => (
          <View style={styles.center}>
            <Text style={styles.listitem}>{item.name}</Text>
            <View style={styles.delete}>
              <Button
                title="delete"
                onPress={() => {
                  props.delete(item.key);
                  deleteItem(item.key);
                }}
              />
            </View>
          </View>
        )}
      />
      <View>
        <Link to="/newQuote" underlayColor="#f0f4f7">
          <Text style={styles.goBack}>Make a new Quote</Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  listitem: {
    marginTop: 50,
    textAlign: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: Color.secondaryColor,
    padding: 8,
    borderRadius: 15,
  },
  goBack: {
    textAlign: "center",
    padding: 30,
    color: Color.secondaryColor,
    fontSize: 20,
    paddingBottom: 30,
  },
  title: {
    marginTop: 50,
    textAlign: "center",
    width: "100%",
    fontSize: 20,
  },
  delete: {
    width: "30%",
    marginTop: 20,
    marginLeft: "37%",
  },
});

export default SavedKanyeQuotes;
