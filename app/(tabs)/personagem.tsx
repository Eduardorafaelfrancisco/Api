import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
     História: Naruto cresceu sem pais e foi rejeitado pelas pessoas de sua vila, pois carrega dentro de si a Kyûbi, a raposa de nove caudas, que atacou a vila quando ele era bebê. Por isso, ele passou a vida tentando ser reconhecido e aceito, superando a solidão e a rejeição.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    color: '#333',
  },
});

export default App;