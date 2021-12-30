import React from "react";
import { View, Text, Image } from "react-native";
import { ReviewDTO } from "../../dtos/ReviewDTO";
import { Divider } from "../Divider";

import { styles } from "./styles";

interface ReviewProps {
  review: ReviewDTO;
}

export function ReviewItem({ review }: ReviewProps) {
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image
          style={styles.userImage}
          source={
            review.author_details.avatar_path
              ? {
                  uri: `${review.author_details.avatar_path.replace(
                    "/http",
                    "http"
                  )}`,
                }
              : require("../../assets/userAvatar.png")
          }
        />

        <Text style={styles.username}>{review.author}</Text>
      </View>
      <Text style={styles.text}>{review.content}</Text>
      <Divider />
    </View>
  );
}
