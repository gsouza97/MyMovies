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
import { ReviewItem } from "../../components/ReviewItem";
import { Divider } from "../../components/Divider";
import { ReviewDTO } from "../../dtos/ReviewDTO";

interface Params {
  movie: MovieDTO;
}

export function MovieDetails() {
  // const reviews = [
  //   {
  //     author: "garethmb",
  //     author_details: {
  //       name: "",
  //       username: "garethmb",
  //       avatar_path:
  //         "/https://secure.gravatar.com/avatar/3593437cbd05cebe0a4ee753965a8ad1.jpg",
  //       rating: null,
  //     },
  //     content:
  //       "Life for Peter Parker (Tom Holland) is complicated thanks to his dual life as Spider-Man and the challenges of being in High School. Unfortunately for him; his best intentions are about to make things much worse in “Spider-Man: No Way Home”.\r\n\r\nTaking place where “Spider-Man: Far From Home” ended; Peter must deal with his secret identity being leaked by Tabloid Journalist J. Jonah Jameson (J.K. Simmons); and the throngs of people, helicopters, and protestors who follow his every move and camp outside his home.\r\n\r\nAs if this was not bad enough; being accused of being a murderer has drawn the attention of the authorities which further complicates his life as does returning to a school where everyone knows his identity.\r\n\r\nDesperate to get away from the constant scrutiny and observation; Peter seeks out Doctor Strange (Benedict Cumberbatch), and asks him to cast a spell that would make the world forget that Peter Parker is Spider-Man.\r\n\r\nStrange agrees but mid-spell Peter requests that there are some exemptions from the spell which include his Girlfriend MJ (Zendaya); his Aunt May (Marisa Tomei); and his friend Ned (Jacob Batalon).\r\n\r\nStrange agrees but in doing so; complications arise which allows entrants from other dimensions to enter their realm. Soon Peter is accosted by villains whom he does not know but seem to know him; that is until he is unmasked and they have no idea who this Peter Parker is before them.\r\n\r\nAs more villains arrive; Peter learns of their fates in their natural dimension and is determined to save them and give them a second chance which puts him at odds with Doctor Strange who says they must go back to whatever fate they had.\r\n\r\nWhat follows is a descent into humor and darkness as Peter despite his best intentions sees the situation go from bad to worse and he must fight to stay true to himself and save the day.\r\n\r\nThe film is a difficult one to review in the fact that there are so many surprise guests, twists, and turns that it is challenging to not reveal anything but suffice it to say that fans should absolutely enjoy it.\r\n\r\nThe film takes its time getting to the action as it has a very slow and deliberate climb and Director Jon Watts is confident enough in the characters and premise that he allows ample time for the characters and setting to build and be established before he gets to the action.\r\n\r\nWhile there is considerable fan service in the film; it never once seems like it is pandering and it all fits very well within the story and the MCU and opens up numerous possibilities for the future.\r\n\r\nThere is a mid-credit scene and a post-credit scene which is basically a trailer and both are very engaging in terms of the possibilities as Marvel has again shown that their plan of interwoven stories and characters continues to deliver and that Spider-Man still remains as popular and engaging as ever.\r\n\r\n4 stars out of 5",
  //     created_at: "2021-12-15T15:35:00.071Z",
  //     id: "61ba0b24d1444300413e2cbe",
  //     updated_at: "2021-12-15T15:35:00.071Z",
  //     url: "https://www.themoviedb.org/review/61ba0b24d1444300413e2cbe",
  //   },
  //   {
  //     author: "msbreviews",
  //     author_details: {
  //       name: "",
  //       username: "msbreviews",
  //       avatar_path:
  //         "/https://secure.gravatar.com/avatar/992eef352126a53d7e141bf9e8707576.jpg",
  //       rating: 9.0,
  //     },
  //     content:
  //       'FULL SPOILER-FREE REVIEW @ https://www.msbreviews.com/movie-reviews/spider-man-no-way-home-spoiler-free-review\r\n\r\n"Spider-Man: No Way Home is one of the darkest, saddest, emotionally draining entries in the MCU, surpassing all of my expectations.\r\n\r\nDespite a messy, convoluted first half with some pacing issues and occasionally frustrating, poorly placed humor, Jon Watts, Chris McKenna, and Erik Sommers more than compensate these minor issues with some of the best (and brutally violent) Spider-Man action ever witnessed on screen.\r\n\r\nIn addition to this, the surprisingly coherent narrative packs shocking developments and actually offers enough screentime for the villains to significantly impact Peter Parker\'s arc. Unbelievably outstanding performances from everyone involved, especially Tom Holland, Zendaya, and Willem Dafoe.\r\n\r\nA heartfelt, nostalgic homage to the Spider-Man legacy that fans will rewatch countless times, laughing and crying along for many more years to come.\r\n\r\nA memorable, passionate, once-in-a-lifetime cinematic experience."\r\n\r\nRating: A',
  //     created_at: "2021-12-15T22:24:58.003Z",
  //     id: "61ba6b391c6329006961d6e3",
  //     updated_at: "2021-12-15T22:24:58.003Z",
  //     url: "https://www.themoviedb.org/review/61ba6b391c6329006961d6e3",
  //   },
  //   {
  //     author: "RADIO1'S MR. MOVIE!-MAD AMI 🌠",
  //     author_details: {
  //       name: "RADIO1'S MR. MOVIE!-MAD AMI 🌠",
  //       username: "Radio1'sMr.Movie!-MadAmi🌠",
  //       avatar_path: "/qGVhkysX35RprxjUHOI0vnFeeRc.jpg",
  //       rating: 10.0,
  //     },
  //     content:
  //       '**" THIS IS POP-ENTERTAINMENT; AT ITS FUNNEST,\r\nWILDEST, WHACKIEST, _MOST_ CREATIVE, "SUBLIME-EST"... _B E S T_  😃 💜 💜 "**\r\n\r\nA **-{ _B I G_ }-** Screen **MICRO** Review; Film Seen Dec 15, \'21. *NB:* This review was **ORIGINALLY** written for publication on **IMDb.** I -_HAVEN\'T_- yet altered the text for publication **here ( i.e TMDb ).** ⬜⬜\r\n\r\n______________________________________________________ \r\n\r\nMJ: "Oh, here\'s a good one ...{ reading from a magazine }... some suggest that Parker\'s powers include the male spider\'s ability to hypnotize females." \r\n\r\nPeter Parker: "Stop, come on." \r\n\r\nMJ: "Yes, my spider lord!" \r\n\r\n______________________________________________________ \r\n\r\n😉 Yeah, I\'m er, -Officially- dubbing this an **"Easter ( - _E G G_ - ) Movie At Christmas",** because it -well and truly- dies reveal itself as **"The Movie Of A 1,000 Beautiful Surprises"**.... and so much, much, much, more. In other words, **-{ SUFFICE TO SAY }-** that "Spider-Man: No Way Home" ( to hitherto be referred to as \'NWH\' ) far, far, far surpassed my Hopes for the picture ....and "Then Some". As a -matter of fact-, my review for this -{ Deeply }- satisfying, inspiring and -UPLIFTING- gianormous theatrical extravaganza 💥 💣 . . . is likely to mark the beginning of -Shorter-, and more -Concise- reviews from me on IMDb; as opposed to the vastly detailed & reasearched pieces that I often write here . . . as the preference on this platform appears to lean towards the former, ( anyway ). Right, so -these- were my three biggest "Takeaways": 1. The **-{ " SHEER RAW TALENT " }-** of NWH\'s three ( Principal ) youngsters, Tom, Zendaya & Jacob . . . & boy, can the young thespian Mr. Thomas Stanley Holland, ( \'still barely all of 25 and a half\' ), -Really, Really- **ACT** 🌠❗2. How brilliantly ALL the various \'Trappings Of Contemporary Fame\', ( whether that fame be positive -Or adverse ), were depicted at the very -onset- of NWH ( as depicted in literally -Every- single teaser & preview for said film ). 3. The totally -{ "Astonishing" }- standard of -all- THE SPECIAL EFFECTS , & indeed . . . just the **{ " _A L L - A R O U N D_ " }** level of  cinematic accomplishment  by Jon Watts, Daren Gilford, & Mauro Fiore, ( Director, Production Designer, Cinematographer ), & the -{ Entirety }- of the movie\'s Crew & Cast, frankly ....in achieving all this thru the -{ Height }- of a global pandemic.... KUDOS 👊 🔥 \r\n\r\nJust before I go, I -Will- say this: "If, ( -like yours truly- ), you\'ve been a Loyal, Loving Admirer of the web-slinger for ( pretty much ) your -Entire- life . . . bring TWICE the amount of tissues ; 1 half for the ( -Several- ) Ribtickling \'Funnies\' in NWH, & the other half for the deeply soulful & -{ RICHLY EMOTIONAL }- scenes that you are going to encounter. Also, -Do- try & stay till the -Very- end of the picture, for not just 1, but in fact, -2- great teaser scenes . . . as you\'ll be -certain- to glean a few -exciting- insights into the near future of the MCU ( Marvel Cinematic Universe ). And here finally, is my score. **" 25 Spider Bitten, -{ Viscerally }- Wowed, & INDEED , " UTTERLY - SMITTEN " Marks Out Of 10 . . . 😃 😃❗ ".**',
  //     created_at: "2021-12-17T01:18:55.512Z",
  //     id: "61bbe57fd2f5b5006119efff",
  //     updated_at: "2021-12-22T09:12:51.219Z",
  //     url: "https://www.themoviedb.org/review/61bbe57fd2f5b5006119efff",
  //   },
  //   {
  //     author: "Chris Sawin",
  //     author_details: {
  //       name: "Chris Sawin",
  //       username: "ChrisSawin",
  //       avatar_path:
  //         "/https://secure.gravatar.com/avatar/bf3b87ecb40599290d764e6d73c86319.jpg",
  //       rating: 8.0,
  //     },
  //     content:
  //       "_Spider-Man: No Way Home_ isn’t without its flaws, but it is mostly exactly what it’s advertised to be. The film doesn’t necessarily redefine the, “With great power comes great responsibility,” aspect for Tom Holland’s Spider-Man, but it without a doubt gives the MCU version of Spider-Man his version of that principle.\r\n\r\n_No Way Home_ is a nostalgic extravaganza that exceeds expectations and is a perfect and satisfying bookend for the first three Tom Holland _Spider-Man_ movies.\r\n\r\n**Full review**: https://boundingintocomics.com/2021/12/18/spider-man-no-way-home-riding-the-nostalgia-train/",
  //     created_at: "2021-12-18T20:55:53.215Z",
  //     id: "61be4ad9c7176d0060507dc9",
  //     updated_at: "2021-12-18T20:55:53.215Z",
  //     url: "https://www.themoviedb.org/review/61be4ad9c7176d0060507dc9",
  //   },
  // ];

  const [loading, setLoading] = useState(true);
  const [relatedMovies, setRelatedMovies] = useState<MovieDTO[]>([]);
  const [castData, setCastData] = useState<CastDTO[]>([]);
  const [reviews, setReviews] = useState<ReviewDTO[]>([]);

  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const route = useRoute();
  const { movie } = route.params as Params;
  const { API_KEY } = process.env;

  function handleBack() {
    navigation.goBack();
  }

  function handleNavigateRelatedMovieDetails(movie: MovieDTO) {
    navigation.navigate("MovieDetails", { movie });
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

  async function getReviews() {
    // try {
    const response = await api.get(
      `/${movie.id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    setReviews(response.data.results);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  }

  useEffect(() => {
    async function getCastAndRelated() {
      setLoading(true);
      try {
        await getCast();
        await getRelatedMovies();
        await getReviews();
      } catch (error) {
        console.log(error);
        Alert.alert("Um erro inesperado ocorreu.", String(error));
      } finally {
        setLoading(false);
      }
    }

    getCastAndRelated();
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
                  <Feather name="star" size={12} color={theme.colors.yellow} />
                  <Text style={styles.ratingText}>
                    {movie.vote_average.toFixed(1)}/10 IMDb
                  </Text>
                </View>
              </View>
              <Feather name="flag" size={22} />
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
