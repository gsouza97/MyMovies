import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import theme from "../../styles/theme";
import {
  BorderlessButton,
  BorderlessButtonProps,
  RectButton,
} from "react-native-gesture-handler";
import { MovieDTO } from "../../dtos/MovieDTO";
import { GenreIcon } from "../GenreIcon";
import { getGenreNames } from "../../utils/getGenreNames";

interface MovieProps extends BorderlessButtonProps {
  data: MovieDTO;
}

export function VerticalMovieCard({ data, ...rest }: MovieProps) {
  return (
    <BorderlessButton style={styles.container} activeOpacity={0.9} {...rest}>
      <Image
        style={styles.poster}
        resizeMode="cover"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        }}
      />

      <View style={styles.movieInfo}>
        <Text style={styles.title}>{data.title}</Text>

        <View style={styles.rating}>
          <Feather name="star" size={12} color={theme.colors.yellow} />
          <Text style={styles.ratingText}>{data.vote_average}/10 IMDb</Text>
        </View>

        <View style={styles.genres}>
          {data.genre_ids.slice(0, 2).map((id) => (
            <GenreIcon key={id} title={getGenreNames(id)} />
          ))}
        </View>

        <View style={styles.duration}>
          <Feather name="clock" size={9} />
          <Text style={styles.durationText}>1h 47m</Text>
        </View>
      </View>
    </BorderlessButton>
  );
}
