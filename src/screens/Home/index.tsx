import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Alert,
  StatusBar,
  ScrollView,
} from "react-native";
import { Header } from "../../components/Header";
import { HorizontalMovieCard } from "../../components/HorizontalMovieCard";
import { Loading } from "../../components/Loading";
import { VerticalMovieCard } from "../../components/VerticalMovieCard";
import { MovieDTO } from "../../dtos/MovieDTO";
import moviesApi from "../../services/movies-api";

import { styles } from "./styles";

export function Home() {
  const [nowShowingMovies, setNowShowingMovies] = useState([] as MovieDTO[]);
  const [popularMovies, setPopularMovies] = useState([] as MovieDTO[]);
  const [loading, setLoading] = useState(true);

  const [nowShowingPage, setNowShowingPage] = useState(1);
  const [popularPage, setPopularPage] = useState(1);

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  function handleNavigateMovieDetails(movie: MovieDTO) {
    navigation.navigate("MovieDetails", { movie });
  }

  async function fetchNowShowingMovies() {
    const response = await moviesApi.getNowShowingMovies(nowShowingPage);
    setNowShowingMovies([...nowShowingMovies, ...response.data.results]);
    setNowShowingPage(nowShowingPage + 1);
  }

  async function fetchPopularMovies() {
    const response = await moviesApi.getPopularMovies(popularPage);
    setPopularMovies([...popularMovies, ...response.data.results]);
    setPopularPage(popularPage + 1);
  }

  useEffect(() => {
    async function getMovies() {
      try {
        await fetchNowShowingMovies();
        await fetchPopularMovies();
      } catch (error) {
        console.log(error);
        Alert.alert("Unable to get the movies", String(error));
      } finally {
        setLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <View style={styles.body}>
          <View style={styles.nowShowing}>
            <View style={styles.header}>
              <Text style={styles.title}>Now Showing</Text>
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 24 }}
              data={nowShowingMovies}
              keyExtractor={(_, index) => String(index)}
              horizontal={true}
              onEndReached={fetchNowShowingMovies}
              onEndReachedThreshold={0.15}
              ListFooterComponent={<Loading size="small" />}
              ListFooterComponentStyle={{
                height: 212,
                padding: 10,
              }}
              renderItem={({ item }) => (
                <HorizontalMovieCard
                  data={item}
                  onPress={() => handleNavigateMovieDetails(item)}
                />
              )}
            />
          </View>

          <View style={styles.popular}>
            <View style={styles.header}>
              <Text style={styles.title}>Popular</Text>
            </View>
            <FlatList
              data={popularMovies}
              keyExtractor={(_, index) => String(index)}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 24 }}
              onEndReached={fetchPopularMovies}
              onEndReachedThreshold={0.15}
              ListFooterComponent={<Loading size="small" />}
              ListFooterComponentStyle={{
                padding: 10,
              }}
              renderItem={({ item }) => (
                <VerticalMovieCard
                  data={item}
                  onPress={() => handleNavigateMovieDetails(item)}
                />
              )}
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
