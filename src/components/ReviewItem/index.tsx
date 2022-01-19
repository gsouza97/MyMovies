import React from "react";
import { View, Text, Image } from "react-native";
import { ReviewDTO } from "../../dtos/ReviewDTO";
import { Divider } from "../Divider";

import { styles } from "./styles";

interface ReviewProps {
  review: ReviewDTO;
}

export function ReviewItem({ review }: ReviewProps) {
  const avatarPathFormatted = review.author_details.avatar_path.replace(
    "/http",
    "http"
  );

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image
          style={styles.userImage}
          source={{
            uri: review.author_details.avatar_path.startsWith("/http")
              ? `${avatarPathFormatted}`
              : `https://ui-avatars.com/api/?name=${review.author}&length=1`,
          }}
        />

        <Text style={styles.username}>{review.author}</Text>
      </View>
      <Text style={styles.text}>{review.content}</Text>
      <Divider />
    </View>
  );
}
