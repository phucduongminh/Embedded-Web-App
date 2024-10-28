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
      <WebView
        originWhitelist={['*']}
        source={{uri: 'https://asianasa.com/'}}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        decelerationRate="normal"
        // renderLoading={() => <WebView.Loading />}
        // renderError={() => <WebView.Error />}
        // renderStart={() => <WebView.Start />}
        // renderStop={() => <WebView.Stop />}
        // renderProgress={() => <WebView.Progress />}
        // renderTop={() => <WebView.Top />}
        // renderBottom={() => <WebView.Bottom />}
        // renderMessage={() => <WebView.Message />}
        // renderRedirect={() => <WebView.Redirect />}
        // renderClose={() => <WebView.Close />}
        // renderCloseRequested={() => <WebView.CloseRequested />}
        style={{flex: 1}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
