import React from "react";
import { View, Text, Image } from "react-native";
import {
  BorderlessButton,
  BorderlessButtonProps,
} from "react-native-gesture-handler";
import { MovieDTO } from "../../dtos/MovieDTO";
import { styles } from "./styles";

interface MovieData extends BorderlessButtonProps {
  data: MovieDTO;
}

export function RelatedMovieCard({ data, ...rest }: MovieData) {
  return (
    <BorderlessButton style={styles.container} activeOpacity={0.9} {...rest}>
      <Image
        style={styles.poster}
        resizeMode="contain"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        }}
      />

      <View style={styles.footer}>
        <Text style={styles.title}>{data.title}</Text>
      </View>
    </BorderlessButton>
  );
}
