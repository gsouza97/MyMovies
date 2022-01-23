import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { ReviewDTO } from "../../dtos/ReviewDTO";
import { Divider } from "../Divider";

import { styles } from "./styles";

interface ReviewProps {
  review: ReviewDTO;
}

export function ReviewItem({ review }: ReviewProps) {
  const [truncated, setTruncated] = useState(false);
  const [formattedText, setFormattedText] = useState("");

  const avatarPathFormatted =
    review.author_details.avatar_path &&
    review.author_details.avatar_path.replace("/http", "http");

  function verifyTruncated() {
    if (review.content.length > 300) {
      setTruncated(true);
      setFormattedText(review.content.slice(0, 300) + "...");
    } else {
      setTruncated(false);
      setFormattedText(review.content);
    }
  }

  function handleSeeMore() {
    setTruncated(false);
    setFormattedText(review.content);
  }

  useEffect(() => {
    verifyTruncated();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image
          style={styles.userImage}
          source={{
            uri:
              review.author_details.avatar_path &&
              review.author_details.avatar_path.startsWith("/http")
                ? `${avatarPathFormatted}`
                : `https://ui-avatars.com/api/?name=${review.author}&length=1`,
          }}
        />

        <Text style={styles.username}>{review.author}</Text>
      </View>

      <Text style={styles.text}>
        {formattedText}
        {truncated && (
          <Text style={styles.readMoreText} onPress={handleSeeMore}>
            {" "}
            Read more
          </Text>
        )}
      </Text>

      <Divider />
    </View>
  );
}
