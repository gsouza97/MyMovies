import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Keyboard,
  FlatList,
  Alert,
} from "react-native";
import {
  RectButton,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";
import theme from "../../styles/theme";
import { VerticalMovieCard } from "../../components/VerticalMovieCard";
import { MovieDTO } from "../../dtos/MovieDTO";
import { Loading } from "../../components/Loading";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import moviesApi from "../../services/movies-api";

export function Search() {
  const [data, setData] = useState<MovieDTO[]>([]);
  const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const navigation: NavigationProp<ParamListBase> = useNavigation();

  async function searchMovies(text: string) {
    try {
      setLoading(true);

      if (text.trim() !== "") {
        const response = await moviesApi.getMoviesSearch(inputText);

        setData(response.data.results);
      }
    } catch (error) {
      console.log(error);
      Alert.alert("An unexpected error has occurred", String(error));
    } finally {
      setLoading(false);
    }
  }

  function handleSearchMovies() {
    searchMovies(inputText);

    inputRef.current?.blur();
  }

  function handleNavigateMovieDetails(movie: MovieDTO) {
    navigation.navigate("MovieDetails", { movie });
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Search</Text>
        </View>

        <View style={styles.search}>
          <TextInput
            style={styles.inputField}
            ref={inputRef}
            placeholder="Search for a movie here"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="search"
            placeholderTextColor={theme.colors.text_grey}
            value={inputText}
            onChangeText={setInputText}
            onSubmitEditing={handleSearchMovies}
            autoFocus
          />
          <RectButton
            style={styles.inputButton}
            onPress={handleSearchMovies}
            enabled={inputText.trim() !== ""}
          >
            <Ionicons
              name="search"
              size={20}
              color={theme.colors.button_white}
            />
          </RectButton>
        </View>
      </TouchableWithoutFeedback>

      <View style={styles.movieList}>
        {loading ? (
          <Loading size="small" />
        ) : !data.length ? (
          <Text style={styles.noMovieText}>Nothing to show</Text>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            contentContainerStyle={{
              paddingHorizontal: 24,
              paddingVertical: 12,
            }}
            onEndReached={() => {}}
            onEndReachedThreshold={0.15}
            // ListFooterComponent={<Loading size="small" />}
            // ListFooterComponentStyle={{
            //   padding: 10,
            // }}
            renderItem={({ item }) => (
              <VerticalMovieCard
                data={item}
                onPress={() => {
                  handleNavigateMovieDetails(item);
                }}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
