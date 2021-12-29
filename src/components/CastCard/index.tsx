import React from "react";
import { View, Text, Image } from "react-native";
import { CastDTO } from "../../dtos/CastDTO";

import { styles } from "./styles";

interface CastProps {
  data: CastDTO;
}

export function CastCard({ data }: CastProps) {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.actorImage}
        source={
          data.profile_path
            ? { uri: `https://image.tmdb.org/t/p/w500${data.profile_path}` }
            : require("../../assets/noImageAvailable.png")
        }
      />
      <Text style={styles.actorName}>{data.name}</Text>
    </View>
  );
}

{
}
