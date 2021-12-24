import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import React from "react";
import { View, SafeAreaView, Text, FlatList } from "react-native";
import { Header } from "../../components/Header";
import { HorizontalMovieCard } from "../../components/HorizontalMovieCard";
import { VerticalMovieCard } from "../../components/VerticalMovieCard";
import { MovieDTO } from "../../dtos/MovieDTO";

import { styles } from "./styles";

interface MoviesProps {
  movieData: MovieDTO[];
}

export function Home() {
  const movieData = [
    {
      adult: false,
      backdrop_path: "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg",
      genre_ids: [28, 12, 878],
      id: 634649,
      original_language: "en",
      original_title: "Spider-Man: No Way Home",
      overview:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      popularity: 18227.93,
      poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      release_date: "2021-12-15",
      title: "Spider-Man: No Way Home",
      video: false,
      vote_average: 8.6,
      vote_count: 2025,
    },
    {
      adult: false,
      backdrop_path: "/eENEf62tMXbhyVvdcXlnQz2wcuT.jpg",
      genre_ids: [878, 28, 12],
      id: 580489,
      original_language: "en",
      original_title: "Venom: Let There Be Carnage",
      overview:
        "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
      popularity: 7486.967,
      poster_path: "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
      release_date: "2021-09-30",
      title: "Venom: Let There Be Carnage",
      video: false,
      vote_average: 7.2,
      vote_count: 4920,
    },
    {
      adult: false,
      backdrop_path: "/1Wlwnhn5sXUIwlxpJgWszT622PS.jpg",
      genre_ids: [16, 35, 10751],
      id: 585245,
      original_language: "en",
      original_title: "Clifford the Big Red Dog",
      overview:
        "As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend. When Clifford magically undergoes one heck of a growth spurt, becomes a gigantic dog and attracts the attention of a genetics company, Emily and her Uncle Casey have to fight the forces of greed as they go on the run across New York City. Along the way, Clifford affects the lives of everyone around him and teaches Emily and her uncle the true meaning of acceptance and unconditional love.",
      popularity: 2229.348,
      poster_path: "/ygPTrycbMSFDc5zUpy4K5ZZtQSC.jpg",
      release_date: "2021-11-10",
      title: "Clifford the Big Red Dog",
      video: false,
      vote_average: 7.5,
      vote_count: 654,
    },
    {
      adult: false,
      backdrop_path: "/5RuR7GhOI5fElADXZb0X2sr9w5n.jpg",
      genre_ids: [16, 35, 10751, 14],
      id: 568124,
      original_language: "en",
      original_title: "Encanto",
      overview:
        "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family with a unique gift from super strength to the power to heal—every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
      popularity: 2129.947,
      poster_path: "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
      release_date: "2021-11-24",
      title: "Encanto",
      video: false,
      vote_average: 7.3,
      vote_count: 390,
    },
  ];

  const navigation: NavigationProp<ParamListBase> = useNavigation();

  function handleNavigateMovieDetails(movie: MovieDTO) {
    navigation.navigate("MovieDetails", { movie });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />

      <View style={styles.body}>
        <View style={styles.nowShowing}>
          <View style={styles.header}>
            <Text style={styles.title}>Now Showing</Text>
          </View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 24 }}
            data={movieData}
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
            data={movieData}
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
    </SafeAreaView>
  );
}
