import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import { BackButton } from "../../components/BackButton";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { GenreIcon } from "../../components/GenreIcon";
import theme from "../../styles/theme";
import { MovieDTO } from "../../dtos/MovieDTO";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

interface Params {
  movie: MovieDTO;
}

export function MovieDetails() {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();
  const { movie } = route.params as Params;

  function handleBack() {
    navigation.goBack();
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.backgroundImage}
        resizeMode="stretch"
        source={{
          uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        }}
      />

      <View style={styles.header}>
        <BackButton onPress={handleBack} />
      </View>

      <View style={styles.movieDetail}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.movieTitle}>
            <View style={styles.wrapper}>
              <Text style={styles.name}>{movie.title}</Text>
              <View style={styles.rating}>
                <Feather name="star" size={12} color={theme.colors.yellow} />
                <Text style={styles.ratingText}>
                  {movie.vote_average}/10 IMDb
                </Text>
              </View>
            </View>
            <Feather name="flag" size={22} />
          </View>

          <View style={styles.genres}>
            <GenreIcon title="adventure" />
            <GenreIcon title="adventure" />
            <GenreIcon title="adventure" />
          </View>

          <View style={styles.movieInfo}>
            <View>
              <Text style={styles.infoTitle}>Length</Text>
              <Text style={styles.infoSubtitle}>2h 28min</Text>
            </View>

            <View>
              <Text style={styles.infoTitle}>Language</Text>
              <Text style={styles.infoSubtitle}>English</Text>
            </View>

            <View>
              <Text style={styles.infoTitle}>Rating</Text>
              <Text style={styles.infoSubtitle}>PG-13</Text>
            </View>
          </View>

          <View style={styles.description}>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.descriptionText}>{movie.overview}</Text>
          </View>

          <View style={styles.relatedMovies}>
            <Text style={styles.relatedTitle}>Related Movies</Text>
            {/* <FlatList
              data={[1, 2, 3, 4, 5, 6, 7]}
              keyExtractor={(item) => String(item)}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 24 }}
              renderItem={({ item }) => (
                <HorizontalMovieCard data={movieData} />
              )}
            /> */}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
