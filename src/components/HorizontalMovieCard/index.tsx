import React from "react";
import { View, Text, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import theme from "../../styles/theme";
import {
  BorderlessButton,
  BorderlessButtonProps,
} from "react-native-gesture-handler";
import { MovieDTO } from "../../dtos/MovieDTO";

interface MovieData extends BorderlessButtonProps {
  data: MovieDTO;
}

export function HorizontalMovieCard({ data, ...rest }: MovieData) {
  return (
    <BorderlessButton style={styles.container} activeOpacity={0.9} {...rest}>
      <Image
        style={styles.poster}
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        }}
      />

      <View style={styles.footer}>
        <Text style={styles.title}>{data.title}</Text>
        <View style={styles.rating}>
          <Feather name="star" size={12} color={theme.colors.yellow} />
          <Text style={styles.ratingText}>
            {data.vote_average.toFixed(1)}/10 IMDb
          </Text>
        </View>
      </View>
    </BorderlessButton>
  );
}
