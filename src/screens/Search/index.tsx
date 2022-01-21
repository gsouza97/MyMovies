import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Keyboard,
  FlatList,
} from "react-native";
import {
  RectButton,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import theme from "../../styles/theme";
import { VerticalMovieCard } from "../../components/VerticalMovieCard";

export function Search() {
  const data = [
    {
      adult: false,
      backdrop_path: "/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
      genre_ids: [28, 12, 14, 878],
      id: 524434,
      original_language: "en",
      original_title: "Eternals",
      overview:
        "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind’s most ancient enemy, the Deviants.",
      popularity: 10421.733,
      poster_path: "/b6qUu00iIIkXX13szFy7d0CyNcg.jpg",
      release_date: "2021-11-03",
      title: "Eternals",
      video: false,
      vote_average: 7.2,
      vote_count: 2982,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Search</Text>
        </View>

        <View style={styles.search}>
          <TextInput
            style={styles.inputField}
            placeholder="Search for a movie here"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            placeholderTextColor={theme.colors.text_grey}
          />
          <RectButton style={styles.inputButton}>
            <Ionicons
              name="search"
              size={20}
              color={theme.colors.button_white}
            />
          </RectButton>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.movieList}>
        {!data.length ? (
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Text style={styles.noMovieText}>Nothing to show</Text>
          </TouchableWithoutFeedback>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            contentContainerStyle={{
              paddingHorizontal: 24,
              paddingVertical: 12,
            }}
            onEndReached={() => {}}
            onEndReachedThreshold={0.15}
            // ListFooterComponent={<Loading size="small" />}
            // ListFooterComponentStyle={{
            //   padding: 10,
            // }}
            renderItem={({ item }) => (
              <VerticalMovieCard data={item} onPress={() => {}} />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
