import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import theme from "../../styles/theme";

interface MovieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieData {
  data: MovieProps;
}

export function HorizontalMovieCard({ data }: MovieData) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.poster}
        resizeMode="contain"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        }}
      />

      <View style={styles.footer}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.rating}>
          <Feather name="star" size={12} color={theme.colors.yellow} />
          <Text style={styles.ratingText}>9.1/10 IMDb</Text>
        </View>
      </View>
    </View>
  );
}
