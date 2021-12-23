import React from "react";
import { View, Text, FlatList } from "react-native";
import { HorizontalMovieCard } from "../HorizontalMovieCard";

import { styles } from "./styles";

export function NowShowing() {
  const movieData = {
    adult: false,
    backdrop_path: "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",
    genre_ids: [28, 12, 878],
    id: 634649,
    original_language: "en",
    original_title: "Spider-Man: No Way Home",
    overview:
      "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    popularity: 18227.93,
    poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    release_date: "2021-12-15",
    title: "Spider-Man: No Way Home",
    video: false,
    vote_average: 8.6,
    vote_count: 2025,
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Now Showing</Text>
      </View>

      <FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={(item) => String(item)}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 24 }}
        renderItem={({ item }) => <HorizontalMovieCard data={movieData} />}
      />
    </View>
  );
}
