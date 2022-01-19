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
} from "react-native";
import { Header } from "../../components/Header";
import { HorizontalMovieCard } from "../../components/HorizontalMovieCard";
import { Loading } from "../../components/Loading";
import { VerticalMovieCard } from "../../components/VerticalMovieCard";
import { MovieDTO } from "../../dtos/MovieDTO";
import api from "../../services/api";

import { styles } from "./styles";

interface MoviesProps {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: MovieDTO[];
  total_pages: number;
  total_results: number;
}

export function Home() {
  const [nowShowingMovies, setNowShowingMovies] = useState({} as MoviesProps);
  const [popularMovies, setPopularMovies] = useState({} as MoviesProps);
  const [loading, setLoading] = useState(true);

  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const { API_KEY } = process.env;

  function handleNavigateMovieDetails(movie: MovieDTO) {
    navigation.navigate("MovieDetails", { movie });
  }

  async function fetchNowShowingMovies() {
    // try {
    const response = await api.get(
      `/now_playing?api_key=${API_KEY}&language=en-US&page=1`
    );
    setNowShowingMovies(response.data);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  }

  async function fetchPopularMovies() {
    // try {
    const response = await api.get(
      `/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    setPopularMovies(response.data);
    // } catch (error) {
    //   console.log(error);
    // // } finally {
    //   setLoading(false);
    // }
  }

  useEffect(() => {
    async function getMovies() {
      try {
        await fetchNowShowingMovies();
        await fetchPopularMovies();
      } catch (error) {
        console.log(error);
        Alert.alert("Um erro inesperado ocorreu.", String(error));
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
              data={nowShowingMovies.results}
              keyExtractor={(item) => String(item.id)}
              horizontal={true}
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
              data={popularMovies.results}
              keyExtractor={(item) => String(item.id)}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingLeft: 24 }}
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
