import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Logo from "../../assets/logo.svg";
import { LoginButton } from "../../components/LoginButton";

import { styles } from "./styles";

export function SignIn() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo width={170} height={194} />
        <Text style={styles.text}>Find now {"\n"}what to watch</Text>
      </View>

      <View style={styles.footer}>
        <LoginButton title="Login with Apple" type="apple" />
        <LoginButton title="Login with Google" type="google" />
      </View>
    </SafeAreaView>
  );
}
