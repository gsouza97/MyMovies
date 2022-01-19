import React from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useAuth } from "../../hooks/useAuth";

import { styles } from "./styles";
import { BorderlessButton } from "react-native-gesture-handler";
import theme from "../../styles/theme";

export function Header() {
  const { logout, user } = useAuth();

  return (
    <View style={styles.container}>
      <Image
        style={styles.userImage}
        source={{ uri: user.photo }}
        resizeMode="contain"
      />
      <Text style={styles.title}>MyMovies</Text>
      <BorderlessButton onPress={logout}>
        <Feather name="log-out" size={19} color={theme.colors.text_title} />
      </BorderlessButton>
    </View>
  );
}
