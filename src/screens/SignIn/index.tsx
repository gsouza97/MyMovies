import React, { useState } from "react";
import { View, Text, SafeAreaView, Alert } from "react-native";
import Logo from "../../assets/logo.svg";
import { Loading } from "../../components/Loading";
import { LoginButton } from "../../components/LoginButton";
import { useAuth } from "../../hooks/useAuth";

import { styles } from "./styles";

export function SignIn() {
  const { loginWithGoogle, loginWithApple } = useAuth();
  const [loading, setLoading] = useState(false);

  async function handleLoginWithApple() {
    try {
      setLoading(true);
      await loginWithApple();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar com a conta da Apple");
      setLoading(false);
    }
  }

  async function handleLoginWithGoogle() {
    try {
      setLoading(true);
      await loginWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert("Não foi possível conectar com a conta da Google");
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo width={170} height={194} />
        <Text style={styles.text}>Find now {"\n"}what to watch</Text>
      </View>

      <View style={styles.footer}>
        <LoginButton
          title="Login with Apple"
          type="apple"
          enabled={!loading}
          onPress={handleLoginWithApple}
        />
        <LoginButton
          title="Login with Google"
          type="google"
          enabled={!loading}
          onPress={handleLoginWithGoogle}
        />
      </View>
      {loading && <Loading />}
    </SafeAreaView>
  );
}
