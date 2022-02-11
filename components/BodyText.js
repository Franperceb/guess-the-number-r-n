import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BodyText = (props) => {
  return (
    <View>
      <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans',
  },
});
export default BodyText;
