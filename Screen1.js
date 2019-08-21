import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

const Screen1 = props => {
  setTimeout(() => {
    Navigation.push(props.componentId, {
      component: {
        name: 'rnntest.Screen2',
      },
    });
  }, 2000);

  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen1;
