import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import * as Font from 'expo-font';
import Main from './components/Count';
import Footer from './components/Footer';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Jura-Bold': require('./assets/fonts/Jura-Bold.ttf'),
        'Jura-Regular': require('./assets/fonts/Jura-Regular.ttf'),
        'Fredoka-Regular': require('./assets/fonts/Fredoka-Regular.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Main />
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
    alignItems: 'center',
  },
});
