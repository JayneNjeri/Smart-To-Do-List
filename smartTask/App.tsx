import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './app/Navigation';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;