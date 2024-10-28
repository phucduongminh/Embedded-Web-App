import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen once the app is loaded
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{uri: 'https://asianasa.com/'}} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
