import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  StatusBar,
  FlatList,
  Alert,
} from "react-native";
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
import { getGenreNames } from "../../utils/getGenreNames";
import api from "../../services/api";
import { HorizontalMovieCard } from "../../components/HorizontalMovieCard";
import { Loading } from "../../components/Loading";
import { CastCard } from "../../components/CastCard";
import { CastDTO } from "../../dtos/CastDTO";

interface Params {
  movie: MovieDTO;
}

export function MovieDetails() {
  const [loading, setLoading] = useState(true);
  const [relatedMovies, setRelatedMovies] = useState<MovieDTO[]>([]);
  const [castData, setCastData] = useState<CastDTO[]>([]);

  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();
  const { movie } = route.params as Params;
  const { API_KEY } = process.env;

  function handleBack() {
    navigation.goBack();
  }

  async function getCast() {
    // try {
    const response = await api.get(
      `/${movie.id}/credits?api_key=${API_KEY}&language=en-US`
    );
    setCastData(response.data.cast);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  }

  async function getRelatedMovies() {
    // try {
    const response = await api.get(
      `/${movie.id}/similar?api_key=${API_KEY}&language=en-US&page=1`
    );
    setRelatedMovies(response.data.results);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  }

  useEffect(() => {
    async function getCastAndRelated() {
      try {
        await getCast();
        await getRelatedMovies();
      } catch (error) {
        console.log(error);
        Alert.alert("Um erro inesperado ocorreu.", String(error));
      } finally {
        setLoading(false);
      }
    }

    getCastAndRelated();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
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

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.genres}>
              {movie.genre_ids.map((id) => (
                <GenreIcon key={id} title={getGenreNames(id)} />
              ))}
            </View>
          </ScrollView>

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

          <View style={styles.cast}>
            <Text style={styles.castTitle}>Cast</Text>
            {loading ? (
              <Loading size="small" />
            ) : (
              <FlatList
                data={castData.slice(0, 20)}
                keyExtractor={(item) => String(item.id)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 24 }}
                renderItem={({ item }) => <CastCard data={item} />}
              />
            )}
          </View>

          <View style={styles.relatedMovies}>
            <Text style={styles.relatedTitle}>Related Movies</Text>
            {loading ? (
              <Loading size="small" />
            ) : (
              <FlatList
                data={relatedMovies}
                keyExtractor={(item) => String(item.id)}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingLeft: 24 }}
                renderItem={({ item }) => <HorizontalMovieCard data={item} />}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
