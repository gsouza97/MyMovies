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
import { Ionicons } from "@expo/vector-icons";

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
import { HorizontalMovieCard } from "../../components/HorizontalMovieCard";
import { Loading } from "../../components/Loading";
import { CastCard } from "../../components/CastCard";
import { CastDTO } from "../../dtos/CastDTO";
import { ReviewItem } from "../../components/ReviewItem";
import { ReviewDTO } from "../../dtos/ReviewDTO";
import { getLanguageName } from "../../utils/getLanguageName";
import { BorderlessButton } from "react-native-gesture-handler";
import moviesApi from "../../services/movies-api";

interface Params {
  movie: MovieDTO;
}

export function MovieDetails() {
  const [loading, setLoading] = useState(true);
  const [relatedMovies, setRelatedMovies] = useState<MovieDTO[]>([]);
  const [castData, setCastData] = useState<CastDTO[]>([]);
  const [reviews, setReviews] = useState<ReviewDTO[]>([]);

  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();
  const { movie } = route.params as Params;

  const formattedDate = new Date(movie.release_date).toLocaleDateString(
    "en-US",
    { day: "numeric", month: "long", year: "numeric" }
  );

  function handleBack() {
    navigation.goBack();
  }

  function handleNavigateRelatedMovieDetails(movie: MovieDTO) {
    navigation.navigate("MovieDetails", { movie });
  }

  async function getCast() {
    const response = await moviesApi.getMovieCast(movie.id);
    setCastData(response.data.cast);
  }

  async function getRelatedMovies() {
    const response = await moviesApi.getRelatedMovies(movie.id);
    setRelatedMovies(response.data.results);
  }

  async function getReviews() {
    const response = await moviesApi.getMovieReviews(movie.id);
    setReviews(response.data.results);
  }

  async function getRuntime() {
    const response = await moviesApi.getMovieRuntime(movie.id);
    const runtime = response.data.runtime;
    function runtimeFormatted(runtime: number) {
      const hour = (runtime / 60).toFixed(0);
      const minute = (runtime % 60).toFixed(0);
      return `${hour}h ${minute}min`;
    }

    movie.runtime = runtimeFormatted(runtime);
  }

  useEffect(() => {
    async function getMovieInfos() {
      setLoading(true);
      try {
        await getCast();
        await getRelatedMovies();
        await getReviews();
        await getRuntime();
      } catch (error) {
        console.log(error);
        Alert.alert("Unable to get movie informations", String(error));
      } finally {
        setLoading(false);
      }
    }

    getMovieInfos();
  }, [movie]);

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
        {loading ? (
          <Loading size="small" />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.movieTitle}>
              <View style={styles.wrapper}>
                <Text style={styles.name}>{movie.title}</Text>
                <View style={styles.rating}>
                  <Ionicons name="star" size={12} color={theme.colors.yellow} />
                  <Text style={styles.ratingText}>
                    {movie.vote_average.toFixed(1)}/10 IMDb
                  </Text>
                </View>
              </View>
              <BorderlessButton>
                <Ionicons name="bookmark-outline" size={22} />
              </BorderlessButton>
            </View>

            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <View style={styles.genres}>
                {movie.genre_ids.map((id) => (
                  <GenreIcon key={id} title={getGenreNames(id)} />
                ))}
              </View>
            </ScrollView>

            <View style={styles.movieInfo}>
              <View>
                <Text style={styles.infoTitle}>Length</Text>
                <Text style={styles.infoSubtitle}>{movie.runtime}</Text>
              </View>

              <View>
                <Text style={styles.infoTitle}>Language</Text>
                <Text style={styles.infoSubtitle}>
                  {getLanguageName(movie.original_language)}
                </Text>
              </View>

              <View>
                <Text style={styles.infoTitle}>Release Date</Text>
                <Text style={styles.infoSubtitle}>{formattedDate}</Text>
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
                  renderItem={({ item }) => (
                    <HorizontalMovieCard
                      data={item}
                      onPress={() => handleNavigateRelatedMovieDetails(item)}
                    />
                  )}
                />
              )}
            </View>

            <View style={styles.reviews}>
              <Text style={styles.title}>Reviews</Text>

              {!reviews.length ? (
                <Text style={styles.noReviewsText}>No reviews yet</Text>
              ) : (
                reviews.map((review) => (
                  <ReviewItem key={review.id} review={review} />
                ))
              )}
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}
