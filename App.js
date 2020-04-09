import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import StartScreen from "./screens/StartScreen";
import SavedKanyeQuotes from "./screens/SavedKanyeQuotes";
import GenerateKanyeQuote from "./screens/GenerateKanyeQuote";
import Header from "./components/Header";
import { NativeRouter, Route, Link } from "react-router-native";

export default function App() {
  const [viewScreen, setViewScreen] = useState();
  const [quotes, setQuotes] = useState([]);
  const key = 0;
  const saveQuote = (quote) => {
    var quoteObj = { key: Math.random(), name: quote };
    setQuotes((oldArray) => [...oldArray, quoteObj]);
  };
  const deleteQuote = (key) => {
    const newQuotes = quotes.filter((quote) => quote.key !== key);
    setQuotes(newQuotes);
  };
  let content = <GenerateKanyeQuote addQuote={saveQuote} quoteList={quotes} />;
  let content2 = <SavedKanyeQuotes quoteList={quotes} delete={deleteQuote} />;
  return (
    <NativeRouter>
      <View style={styles.screen}>
        <Header />
        <Route exact path="/" component={StartScreen} />
        <Route path="/newQuote">{content}</Route>
        <Route path="/savedQuotes">{content2}</Route>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
